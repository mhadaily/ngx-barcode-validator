import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;
  title: string = 'Angular Barcode Scanner and Validator Using Observable (RxJS)';
  fork: string = 'FORK ME!';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl('/barcode');
  }

}
