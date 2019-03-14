import { Component, OnInit } from '@angular/core';
import { USERS } from '../user-list';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public incorrectInfo = false;

  constructor(private nc: NavigationComponent) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username, password);
    USERS.forEach(element => {
      if((element.username === username) && (element.password === password)){
          this.nc.logInUsername(username);
          return;
        }
    });
    this.incorrectInfo = true;
  }

}
