import {Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';
import locale = moment.locale;

@Component({
   selector: 'az-idatepicker-years',
    templateUrl: './idatepicker-years.component.html',
    styleUrls: ['idatepicker-years.sass']
})

export class IDatePickerYearsComponent implements OnInit, AfterViewInit{
    minYear: number = 1970;
    maxYear: number = 2020;
    months: Array<Object>;

    @Input() locale: string;
    @Input() yearCalendar: string;
    @Output() showCalendar: EventEmitter<string> = new EventEmitter();

    @ViewChild('yearCalendarInit') yc:ElementRef;

    numberOfyears: Array<number> = Array((this.maxYear - this.minYear)+1).fill(0).map((e,i)=> i);

    ngOnInit(){
        this.months = Array(12).fill(0).map((e,i)=>{
            return {
                val:moment().locale(this.locale).month(i).format('MMM'),
                key: i+1
            };
        });
    }

    ngAfterViewInit(){
        // bring year calendar to the first view of user
        this.yc.nativeElement.scrollIntoView({block: 'start', behaviour: 'smooth'});
    }

    showMonths(year: number): void{
        this.yearCalendar = year.toString();
    }

    backToCalendar(year: number, month: number): void{
        let m_ = month < 10 ? '0'+month.toString() : month.toString();
        let selectedDate = moment(year.toString() + "-" + m_ + "-01").format('YYYY-MM-DD');
        this.showCalendar.emit(selectedDate);
    }


}