import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

class Model{
    date: string;
    constructor(
        date: string
    ){
        this.date = date;
    }
}

@Component({
    selector: 'my-app',
    template: `
        <az-idatepicker #azIDatePicker
            id="myInput"
            [name]="'myInputName'"
            [placeholder]="'Testing'"
            [dayLabels]="['S','S','R','K','J','S','M']"
            [disableDays]="[2,3,6]"
            [locale]="'id'"
            [format]="'YYYY-MM-DD'"
            [idatePickerBinding]="model.date"
            [sundayHighlight]=true
            [maxYear]=2020
            [minYear]=1990
            [minDate]="minDate"
            [maxDate]="maxDate"
            (getSelectedDate)="setDate($event)"
        ></az-idatepicker>
        <p>Selected Date: {{ selectedDate }}</p>
        <button (click)="azIDatePicker.openDatePicker()">Open Date Picker</button>
`
})

export class AppComponent implements OnInit {
    model:any = new Model('2017-01-01');
    selectedDate: any;
    minDate: any;
    maxDate: any;

    ngOnInit() {
        this.minDate = moment('2017-04-13');
        this.maxDate = moment('2017-04-20');
    }

    setDate(date: any): any {
        this.selectedDate = date;
    }
}