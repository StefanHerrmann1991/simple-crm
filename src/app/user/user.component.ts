import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user: User = new User();
  allUsers = [];

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'costomIdName'})
    .subscribe((changes: any) => {
      console.log('Received changes', changes);
      this.allUsers = changes;      
    })
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
