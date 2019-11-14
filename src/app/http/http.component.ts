import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_LINK = 'https://jsonplaceholder.typicode.com/users';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(API_LINK).subscribe(
      (donnees) => {
        console.log(donnees);
      }
    );
  }

}
