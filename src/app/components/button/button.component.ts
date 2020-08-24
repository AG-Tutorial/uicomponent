import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(ele: ElementRef, view: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
