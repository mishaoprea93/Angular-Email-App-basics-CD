import { Component, OnInit } from '@angular/core';
import{Email} from './../email';


@Component({
  selector: 'app-emails-component',
  templateUrl: './emails-component.component.html',
  styleUrls: ['./emails-component.component.css']
})
export class EmailsComponentComponent implements OnInit {
    emails:Array<object>
  constructor() { 
    this.emails=[]
    this.emails.push(new Email("your dog is dead",false,"wige@gmail.com","thats is,he is dead."));
    this.emails.push(new Email("your dog pooped",true,"wiffeeeee@gmail.com","he said"));
    this.emails.push(new Email("your cat is back",true,"wiffee@gmail.com","i just said"));
    this.emails.push(new Email("hio there",true,"mikael@gmail.com","i just called"));
    this.emails.push(new Email("hey ",true,"mika@gmail.com","i just called you.please answer"));
    this.emails.push(new Email("Hi man",true,"mikael@gmail.com","i just called you"));
    
    
    
    
    
  }
  ngOnInit() {
    console.log("hey")
  }

}
