import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;
  title: string = 'Angular2 Barcode Scanner';
  
  ngOnInit() {
  }
  
  
}
