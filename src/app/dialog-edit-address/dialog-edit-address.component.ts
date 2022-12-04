import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.sass']
})
export class DialogEditAddressComponent {

  user: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  saveUser() {

  }



}
