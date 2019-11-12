import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  isDisabled = false;
  constructor() { }

  ngOnInit() {
  }
  disableEnable() {
    this.isDisabled = !this.isDisabled;
  }
  logguer(input) {
    console.log(input);
  }

}
