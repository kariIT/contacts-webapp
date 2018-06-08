import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarService} from './toolbar.service';
import {ToolbarOptions} from './toolbar-options';
import {Location} from '@angular/common';
import {SnackbarService} from '../snackbar/snackbar.service';
import {SnackbarComponent} from '../snackbar/snackbar.component';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';

@Component({
  selector: 'cw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  // snackbar things
  public static message: string;
  public static action: string;
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;

  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private toolbar: ToolbarService, private location: Location, public snackbar: MatSnackBar) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
    });
  }

  onMenuClick() {
    this.MenuClick.emit();
  }

  onNavigateBack() {
    this.location.back();
  }

  dismiss(): void {
    this.snackBarRef.dismiss();
  }

  onEditClick(): void {
    this.snackbar.open('Editing contact!', 'OK');
  }
}

