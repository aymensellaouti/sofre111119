import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes: Personne[] = [];
  constructor() { }
  getEmbaauchees(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    } else {
      alert('Cette personne est déjà selectionnée');
    }
  }
}
