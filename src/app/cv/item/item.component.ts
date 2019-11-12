import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendPersonne() {
    this.selectItem.emit(
      this.personne
    );
  }
}
