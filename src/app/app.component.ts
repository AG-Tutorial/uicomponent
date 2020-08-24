import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  // when false it is not available in OnInit
  @ViewChild('myDivSingle', { static: true }) appDivSingle: ElementRef;
  @ViewChildren('myDiv') appDiv: QueryList<ElementRef>;
  dummyList = [];
  title = "uicomponent";

  constructor() {
    this.dummyList = [
      {
        value: "Esteban Gutmann IV",
      }, {
        value: "Bernardo Prosacco Jr.",
      }, {
        value: "Nicholaus Kulas PhD",
      }
    ];
  }

  ngOnInit(): void {
    //console.log("this Element::", this.appDiv);
    this.appDivSingle.nativeElement.innerHTML = "I am changed in OnInit ElementRef & ViewChild 1";
  }

  ngAfterViewInit() {
    //console.log("this Element::", this.appDiv);
    this.appDiv.forEach((list)=>{
      list.nativeElement.innerHTML = "changed in AfterViewInit";
    });
  }
}
