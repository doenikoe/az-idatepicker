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
Call <az-idatepicker> from you template:
```angular2html
    <az-idatepicker
      id="myDateId"
      name="myDateName"
      placeholder="az-idatepicker"
      customSymbol="S-S-R-K-J-S-M"
      locale="id"
      format="YYYY-MM-DD"
      idatePickerBinding="yourBinding"
    ></az-idatepicker>
```

# API
| Parameter          	| Type    	| Description                                                                                         	|
|-----------------------|-----------|-------------------------------------------------------------------------------------------------------|
| id                 	| string  	| ID of component                                                                                     	|
| name               	| string  	| Name of component                                                                                   	|
| placeholder        	| string  	| Text to shown if the datepicker is empty                                                            	|
| customSymbol       	| string  	| List of custom day symbol at the header, it started from monday and each symbol separated by 'dash' 	|
| locale             	| string   	| Use momentjs (http://momentjs.com/) locale files                                                    	|
| format             	| string  	| The date format, default to 'YYYY-MM-DD'                                                            	|
| idatePickerBinding 	| any     	| Binding for ngModel                                                                                 	|

# TODO
- Improve UI and documentation
- Add more API
- Create a sample app
