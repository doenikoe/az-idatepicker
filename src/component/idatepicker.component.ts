import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'az-idatepicker',
    templateUrl: './idatepicker.component.html',
    styleUrls: ['idatepicker.sass']
})

export class IDatePickerComponent implements OnInit{
    selectedDate: string = moment().format('YYYY-MM-DD');
    dateOutput: string;
    selectedYear: string;
    selectedDay: string;
    selectedMonth: string;
    selectedDayStr: string;
    selectedMonthStr: string;
    monthCalendarStr: string;
    monthCalendar: number;
    yearCalendar: string;
    changeViewOptions: boolean = false;
    dates: Array<Object>;
    weeks: Array<number>;
    viewCalendar: boolean = false;

    @Input() placeholder: string = '';
    @Input() dayLabels: string;
    @Input() locale: string = 'en-ca';
    @Input() format:string = 'YYYY-MM-DD';
    @Input() id: string = '';
    @Input() name: string = '';
    @Input() idatePickerBinding:any = '';
    @Input() sundayHighlight: boolean = false;
    @Input() minYear: number = 1970;
    @Input() maxYear: number = 2020;

    @Output() onSelect: EventEmitter<string> = new EventEmitter();

    constructor(){

    }

    ngOnInit(){
        if(this.maxYear < this.minYear)
            throw new Error('Invalid attribute value: maxYear must be greater than or equal to minYear');

        if(this.idatePickerBinding !== '') {
            this.selectDate(this.idatePickerBinding, false);
        }
        this.formatDateStr();
        this.setCalendarProps();
        this.renderCalendar();
    }

    setCalendarProps():void{
        this.monthCalendar = parseInt(this.selectedMonth);
        this.yearCalendar = this.selectedYear;
    }

    renderCalendar():void{
        this.monthCalendarStr = moment()
            .locale(this.locale)
            .month(this.monthCalendar-1)
            .format('MMMM');

        this.dates = this.populateDate();
        this.dates = this.getDateChunk(this.dates, 7);
        this.weeks = Array(this.dates.length).fill(0).map((e,i)=> i);
    }

    formatDateStr(): void{
        this.selectedDay = moment(this.selectedDate)
                            .locale(this.locale)
                            .format('DD');

        this.selectedDayStr = moment(this.selectedDate)
                                .locale(this.locale)
                                .format('ddd');

        this.selectedMonth = moment(this.selectedDate)
                            .locale(this.locale)
                            .format('MM');

        this.selectedMonthStr = moment()
                                    .locale(this.locale)
                                    .month(parseInt(this.selectedMonth)-1)
                                    .format('MMM');

        this.selectedYear = moment(this.selectedDate)
                            .locale(this.locale)
                            .format('YYYY');
    }

    populateDate():Array<Object> {
        let lastDate = this.getLastDate();
        let monthCalendar = this.monthCalendar.toString();
        const calendarIdentifier = this.yearCalendar + '-' + (monthCalendar.length == 1 ? '0' + monthCalendar : monthCalendar);
        let calendarDate = Array(lastDate).fill(0).map((e, i) => {
            let date = (i + 1).toString();
            let dateStr = calendarIdentifier + '-' + (date.length == 1 ? '0' + date : date);
            let dayName = moment(dateStr).format('dddd');
            return [{'day': dayName, 'date': i + 1, 'meta': dateStr}];
        });

        let firstDay = moment(calendarIdentifier + '-01').format('dddd');
        let lastDay = moment(calendarIdentifier + '-' + lastDate).format('dddd');
        switch (firstDay) {
            case 'Tuesday':
                calendarDate.unshift([null]);
                break;
            case 'Wednesday':
                calendarDate.unshift([null], [null]);
                break;
            case 'Thursday':
                calendarDate.unshift([null], [null], [null]);
                break;
            case 'Friday':
                calendarDate.unshift([null], [null], [null], [null]);
                break;
            case 'Saturday':
                calendarDate.unshift([null], [null], [null], [null], [null])
                break
            case 'Sunday':
                calendarDate.unshift([null], [null], [null], [null], [null], [null]);
                break;
        }

        switch (lastDay) {
            case 'Saturday':
                calendarDate.push([null]);
                break;
            case 'Friday':
                calendarDate.push([null], [null]);
                break;
            case 'Thursday':
                calendarDate.push([null], [null], [null]);
                break;
            case 'Wednesday':
                calendarDate.push([null], [null], [null], [null]);
                break;
            case 'Tuesday':
                calendarDate.push([null], [null], [null], [null], [null]);
                break
            case 'Monday':
                calendarDate.push([null], [null], [null], [null], [null], [null]);
                break;
        }

        return calendarDate;
    }

    getLastDate(): number{
        return parseInt(moment([this.yearCalendar, 0, 31]).month(this.monthCalendar-1).format("DD"));
    }

    //Split array of dates into chunk
    private getDateChunk(date: Array<Object>, size: number): Array<Object>{
        var results = [];
        while (date.length) {
            results.push(date.splice(0, size));
        }
        return results;
    }

    selectDate(event: string, closeAfterSelect: boolean = true): void{
        this.selectedDate = moment(event).format('YYYY-MM-DD');
        this.formatDateStr();
        this.dateOutput = moment(this.selectedDate)
            .locale(this.locale)
            .format(this.format);

        if(closeAfterSelect){
            //Close calendar
            this.viewCalendar = false;

            //Emit selection event
            this.onSelect.emit(this.dateOutput);
        }
    }

    changeCalendar(direction: string): void{
        if(direction==='prev'){
            if(this.monthCalendar == 1){
                let yearCalendar = parseInt(this.yearCalendar) - 1;
                this.yearCalendar = yearCalendar.toString();
                this.monthCalendar = 12;
            }else{
                this.monthCalendar-=1;
            }
        }

        if(direction==='next'){
            if(this.monthCalendar == 12){
                let yearCalendar = parseInt(this.yearCalendar) + 1;
                this.yearCalendar = yearCalendar.toString();
                this.monthCalendar = 1;
            }else{
                this.monthCalendar+=1;
            }
        }
        this.formatDateStr();
        this.renderCalendar();
    }

    viewOptions(): void{
        this.changeViewOptions = !this.changeViewOptions;
    }

    viewBack(event: string):void{
        this.selectDate(event, false);
        this.setCalendarProps();
        this.renderCalendar();
        this.viewOptions();
    }

    focus():void{
        this.viewCalendar = true;
    }

    cancel():void{
        this.viewCalendar = false;
        this.dateOutput = null;
        this.changeViewOptions = false;
    }

    ok():void{
        this.viewCalendar = false;
        this.onSelect.emit(this.dateOutput);
    }
}