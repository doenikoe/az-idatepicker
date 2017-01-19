import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'az-idatepicker-dates',
    templateUrl: './idatepicker-dates.component.html',
    styleUrls: ['idatepicker-dates.css']
})

export class IDatePickerDatesComponent implements OnInit{
    dateSymbol: Array<string>;

    @Input() customSymbol: string;
    @Input() weeks: Array<number>;
    @Input() dates: Array<Object>;
    @Input() selectedDate: string;
    @Output() setSelectedDate: EventEmitter<string> = new EventEmitter();

    ngOnInit(){
        this.dateSymbol = this.parseWeekDays();
    }

    parseWeekDays(): Array<string>{
        if(!this.customSymbol){
            return ['M', 'T', 'W', 'T', 'F', 'S', 'S']
        }
        return this.customSymbol.split('-');
    }

    getIsSelected(date: string):boolean{
        return date == this.selectedDate;
    }

    selectDate(date: string):void{
        this.setSelectedDate.emit(date);
    }
}