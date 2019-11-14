import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 77777, 'teacher', 'as.jpg'),
      new Personne(2, 'as', 'as', 26, 77777, 'teacher', ''),
      new Personne(3, 'as', 'as', 26, 77777, 'teacher', '')
    ];
  }
  getPeronnes(): Personne[] {
    return this.personnes;
  }
  findPersonneById(id): Personne {
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }
}
