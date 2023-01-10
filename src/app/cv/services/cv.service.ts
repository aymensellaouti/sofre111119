import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const API_LINK = 'https://apilb.tridevs.net/api/personnes';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 77777, 'teacher', 'as.jpg'),
      new Personne(2, 'as', 'as', 26, 77777, 'teacher', ''),
      new Personne(3, 'as', 'as', 26, 77777, 'teacher', '')
    ];
  }
  getFakePeronnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  findPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + `/${id}`);
  }
  deletePersonneById(id): Observable<Personne> {
    return this.http.delete<Personne>(API_LINK + `/${id}`);
  }
}
