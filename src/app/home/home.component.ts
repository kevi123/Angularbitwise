import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


// these are your variables
  constructor() { }
  greeting= 'Welcome to my Angular APp';
  introduction = 'A very large angular application';
  text= 'type in the box'
  list= ['one','two','three','four','five'];


  ngOnInit() {
  }

}
