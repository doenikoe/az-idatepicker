import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { IDatePickerComponent } from './component/idatepicker.component';
import { IDatePickerDatesComponent } from './component/idatepicker-dates.component';
import { IDatePickerYearsComponent } from './component/idatepicker-years.component';
import {DateHighlight} from './directive/dateHighlight.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        IDatePickerComponent,
        IDatePickerDatesComponent,
        IDatePickerYearsComponent,
        DateHighlight
    ],
    exports:[IDatePickerComponent]
})
export class IDatePickerModule { }