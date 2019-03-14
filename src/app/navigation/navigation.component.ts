import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public hideMenu: boolean = true;
  private loggedIn: boolean = false;
  public username;

  constructor() { }

  ngOnInit() {
  }

  logInUsername(username){
    this.username = username;
    this.loggedIn = true;
    this.hideMenu = true;
  }
  logOut(){
    this.loggedIn = false;
  }

  onClickHide(){
    if(this.hideMenu){
      this.hideMenu = false;
    }
    else{
      this.hideMenu = true;
    }
  }

}
