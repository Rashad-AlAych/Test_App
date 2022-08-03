import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  subject: string | undefined;
  message: string | undefined;

  constructor(private apiCaller: HttpClient) { }

  ngOnInit(): void {
  }

  postData(){
    this.apiCaller.post<any>('http://localhost:3000/contactus', 
    { 
      'name':this.name , 
      'email': this.email,
      'subject': this.subject,
      'message': this.message

    }).subscribe(data => {
  
    })
  }

}
