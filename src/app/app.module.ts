import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IDatePickerModule} from '../idatepicker.module';

import { AppComponent } from './component/app.component';

@NgModule({
    imports: [
        BrowserModule,
        IDatePickerModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }