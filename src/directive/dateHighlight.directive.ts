import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[idate]'
})
export class DateHighlight{
    @HostBinding('class.hover') isHover:boolean = false;
    constructor(private el: ElementRef){

    }

    @HostListener('mouseenter') onMouseEnter(){
        this.isHover = true;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.isHover = false;
    }
}