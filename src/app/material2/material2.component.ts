import { Component } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { DialogContentComponent } from "./dialog-content/dialog-content.component";

@Component({
  selector: 'app-material2',
  templateUrl: './material2.component.html',
  styleUrls: ['./material2.component.scss']
})
export class Material2Component {
  isDarkTheme: boolean = false;
  
  lastDialogResult: string;
  
  foods: any[] = [
    {
      name: 'Pizza',
      rating: 'Excellent'
    },
    {
      name: 'Burritos',
      rating: 'Great'
    },
    {
      name: 'French fries',
      rating: 'Pretty good'
    },
  ];
  
  progress: number = 0;
  
  constructor (private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
  
  openDialog () {
    let dialogRef = this._dialog.open(DialogContentComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }
  
  showSnackbar () {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}

