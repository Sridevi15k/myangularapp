import { Component } from '@angular/core';
import { HttpService } from './http.service';
//every angular app requires root level component.
//decorator @Component with objects.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World How are you doing?';
  jsonValue = {
    a: 'hello',
    b: 'world'
  }

  newDate = new Date();

  constructor(private httpService: HttpService) {

  }

  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1');
  }
}
