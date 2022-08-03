import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  services: myService[]=[];
  picboxes: myPicBox []=[];

  
  constructor(private apiCaller: HttpClient){

  }
  
  getService(){
    this.apiCaller.get('http://localhost:3000/services')
    .subscribe((result : any) => {
        result.Services.forEach((element:any) => {
        var my_service = new myService();
        my_service.title = element['A'];
        my_service.description = element['B'];
        my_service.icon = element['C'];
        this.services.push(my_service);
      });
    }
    )
  }

  getpicBox(){
    this.apiCaller.get('http://localhost:3000/picBoxes')
    .subscribe((result : any) => {
        result.PicBox.forEach((element:any) => {
        var my_picBox = new myPicBox();
        my_picBox.title = element['A'];
        my_picBox.description = element['B'];
        my_picBox.url = element['C'];
        this.picboxes.push(my_picBox);
      });
    }
    )
  }

  ngOnInit(): void {
    this.getService();
    this.getpicBox();
}}

export class myService {
  title: string = '';
  description: string ='';
  icon: string='';
}

export class myPicBox {
  title: string = '';
  description: string ='';
  url: string='';
}




