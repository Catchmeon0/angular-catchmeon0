import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  edituserform = new FormGroup({
    username: new FormControl('')
  });
  onFormSubmit(): void {
    console.log('username:' + this.edituserform.get('username').value);
  }
}
