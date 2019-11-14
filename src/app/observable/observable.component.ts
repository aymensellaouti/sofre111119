import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  imageObservable: Observable<string>;
  path = 'as.jpg';
  imagesPaths = [
    '404.png',
    'as.jpg',
    'cv.png',
    'default.png',
    'zizou.jpeg',
  ];
  constructor() {
  }

  ngOnInit() {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe(
      (val) => {
      console.log(val);
    },
      (erreur) => console.log(erreur),
      () => console.log('I finish with that')
    );
    observable.pipe(
      filter( (val) => val % 2 === 0),
      map((val) => val * 3)
    ).subscribe(
      (val) => {
      console.log(val);
    });
    this.imageObservable = new Observable<string>(
      (observer) => {
        let i = this.imagesPaths.length - 1;
        setInterval(() => {
          if (i < 0) {
            i = this.imagesPaths.length - 1;
          }
          observer.next(this.imagesPaths[i--]);
        }, 1000);
      }
    );
    this.imageObservable.subscribe(
      (path) => this.path = path
    );
  }
}
