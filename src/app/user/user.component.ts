import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//to grab user from outside world
interface UserInterface {
  name: string;
  age: string;
  id: number;
  isColored: boolean;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  //Input is imported from Angular core package
  //to see the data on the browser, parse user data from app component
  //Input decorator is expecting user object which is in the UserInterface
  @Input() user: UserInterface;

  //listening the event from the child component -- user
  @Output() userEvent: EventEmitter<UserInterface>;
  isColored: boolean;

  constructor() { 
    this.userEvent = new EventEmitter<UserInterface>();
    this.user = {} as UserInterface;
  }
  
  
  ngOnInit(): void {
    //to handle the error, instead of true we give this.user.isColored
    this.isColored = this.user.isColored ? true : false;
  }

  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }

}
