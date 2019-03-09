import { Component, OnInit } from '@angular/core';
import {IUser} from '../Models/iuser.modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user:IUser = new IUser();

  constructor() { }

  ngOnInit() {
  }

  OnSubmit()
  {
    if(this.user.uname!=null && this.user.ucity!=null){
    console.log(this.user);
    }
    else{
      alert("please enter proper user info...");
    }
  }

}
