import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  // Create Formgroup instance
  myform: FormGroup;
  constructor() {
  // here name is group of first name and last name, formgroup may be nested in another form group.
  this.myform = new FormGroup({
  name: new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  }),
  email: new FormControl(),
  password: new FormControl(),
  language: new FormControl()
  });
  }
  ngOnInit() {
  }

}
