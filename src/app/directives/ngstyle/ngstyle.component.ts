import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  @Input() color = 'blue';
  @Input() bg = 'white';
  font = 'Times new roman';
  size = 20;
  constructor() { }

  ngOnInit() {
  }

}
