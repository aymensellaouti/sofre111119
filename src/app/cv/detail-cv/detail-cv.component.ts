import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.findPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
          },
          (erreur) => {
            if (!this.personne) {
              this.router.navigate(['cv']);
            }
          }
        );
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (queryparams) => {
        console.log(queryparams);
      }
    );
  }

  deletePersonne() {

    this.cvService.deletePersonneById(this.personne.id).subscribe(
      (data) => {
        this.router.navigate(['cv']);
      },
      (erreur) => {
        console.log(erreur);
        alert('Problem');
      }
    );
  }
}
