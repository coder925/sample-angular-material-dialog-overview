import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MdDialog) {
    console.log(dialog);
  }

  openDialog() {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      height: '400px',
      width: '600px'
    });

  }
}
