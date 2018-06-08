import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'cw-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  // MatSnackBarRef: MatSnackBarRef<ToolbarComponent>;
  simpleSnackBarRef: any;

  constructor(public snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }

  openSnackBar() {
    ToolbarComponent.message = 'something.';
    this.simpleSnackBarRef = this.snackbar.openFromComponent(ToolbarComponent);
    this.simpleSnackBarRef.instance.MatSnackBarRef = this.simpleSnackBarRef;
    console.log('Snackbar opened.');
  }

  closeSnackbar(): void {
    this.simpleSnackBarRef.dismiss();
    console.log('Snackbar dismissed.');
  }

  Test() {
    this.snackbar.openFromComponent(ToolbarComponent, {
      duration: 2500,
    });
  }
}
