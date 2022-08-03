import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-box',
  templateUrl: './pic-box.component.html',
  styleUrls: ['./pic-box.component.css']
})
export class PicBoxComponent implements OnInit {

  @Input() title = "t0";
  @Input() description = "D0";
  @Input() image = "https://cdn.pixabay.com/photo/2022/05/18/12/04/flower-7205105__340.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
