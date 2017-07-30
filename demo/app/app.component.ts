import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  test(data: any) {
    data.return = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('test');
      }, 500)
    });
  }

  testPromise(data) {
    data.return = new Promise((res) => {
      setTimeout(() => {
        res('next')
      }, 5000)
    })
  }
}

