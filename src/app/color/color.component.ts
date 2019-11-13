import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color: string;
  constructor() { }

  ngOnInit() {
    this.color = this.defaultColor;
  }
  setDefault() {
    this.color = this.defaultColor;
  }
  changeColor(color: string) {
    this.color = color;
  }
}
