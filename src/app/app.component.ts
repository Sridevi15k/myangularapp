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
  //title = 'Hello World How are you doing?';
  userObject = {
    name: 'John',
    age: '32',
    id: 0,
    isColored : true
  }

  newDate = new Date();

  constructor(private httpService: HttpService) {

  }

  // handleEvent() {
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
  //   .subscribe((response) => {
  //     //used when there is a json object
  //     //this.jsonValue = response
  //     console.log('hello');
  //   });
  //}
 handleEvent(event: any) {
   console.log(event);
 }

}
