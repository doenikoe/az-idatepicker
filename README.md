![alt tag](https://github.com/doenikoe/az-idatepicker/raw/master/screenshot.png)

# az-idatepicker
Datepicker component for angular 2. See it in action here: [https://plnkr.co/edit/gJu3kNJL3rnURc4e3Vml?p=preview](https://plnkr.co/edit/gJu3kNJL3rnURc4e3Vml?p=preview) 

# Installation
This components require moment.js:
```npm
npm install moment --save
```
Install az-idatepicker:
```npm
npm install az-idatepicker --save
```

# Usage
import IDatePickerModule into your app module:
```angularjs
import {IDatePickerModule} from 'az-idatepicker';

@NgModule({
    imports: [
        IDatePickerModule,
        ...
    ],
    declarations: [
        ...
    ],
    bootstrap: [...]
})
```
Call <az-idatepicker> from your template:
```angular2html
<az-idatepicker
    id="myInput"
    [name]="'myInputName'"
    [placeholder]="'Testing'"
    [dayLabels]="'S-S-R-K-J-S-M'"
    [locale]="'id'"
    [format]="'YYYY-MM-DD'"
    [idatePickerBinding]="model.date"
    (onSelect)="setDate($event)"
></az-idatepicker>    
```

# API
## Attributes
| Parameter          	| Type           | Is Required | Default Value | Description                                                                                                                                                |
|-----------------------|----------------|-------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                 	| string         | no          |      -        | ID of component                                                                                                                                            |
| name               	| string         | no          |      -        | Name of component                                                                                                                                          |
| placeholder        	| string         | no          |      -        | Text to shown if the datepicker is empty                                                                                                                   |
| dayLabels       	    | Array<string>  | yes         |      -        | Day labels visible at header, it started from monday and each symbol separated by 'dash'                                                                   |
| locale             	| string         | no          |    en-ca      | Use momentjs (http://momentjs.com/) locale files                                                                                                           |
| format             	| string         | no          |  YYYY-MM-DD   | The date format, default to 'YYYY-MM-DD'                                                                                                                   |
| idatePickerBinding 	| any            | no          |      -        | Binding for ngModel                                                                                                                                        |
| sundayHighlight       | boolean        | no          |    false      | If true then `sunday` will have red color                                                                                                                  |
| minYear               | number         | no          |     1970      | Minimum year                                                                                                                                               |
| maxYear               | number         | no          |     2020      | Maximum year                                                                                                                                               |
| disableDays           | Array<number>  | no           |     []       | Disable dates that in the defined day. Day must defined in ordered index (0=monday, 1=tuesday, 2=wednesday, 3=thursday, 4=friday, 5=saturday, 6: sunday)        |
  
## Callback Events
| Name                  | Return Type  | Description                                                                                        |
|-----------------------|--------------|----------------------------------------------------------------------------------------------------|
| getSelectedDate       | string       | Return selected date

## Exposed Method
You can use [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars) to call exposed methods in az-idatepicker component
Example:
```angular2html
<button (onclick)="elem.openDatePicker()">Open IDatePicker</button>

<az-idatepicker #elem
    id="myInput"
    [name]="'myInputName'"
    [placeholder]="'Testing'"
    [dayLabels]="'S-S-R-K-J-S-M'"
    [locale]="'id'"
    [format]="'YYYY-MM-DD'"
    [idatePickerBinding]="model.date"
    (onSelect)="setDate($event)"
></az-idatepicker>
```

| Name                  | Args  | Description           |
|-----------------------|-------|-----------------------|
| openDatePicker        | -     | Open date picker      |
| closeDatePicker       | -     | Close date picker     |

## Issues
If you found any bugs please do not hesitate to give us feedback by reporting issue in our github repository

## Star
:point_right: Support us by give a star :star: 

## License
- License: MIT

## Author 
- Author: doenikoe



