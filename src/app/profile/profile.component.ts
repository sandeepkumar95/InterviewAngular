import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable}  from 'rxjs/Observable';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  firstname: string;
  lastname: string;
  email: string;
  street: string;
  city: string;
  zip: string;
  constructor(private profilesService: ProfilesService) { }


onSubmit() {
  this.profilesService.sendData({firstname: this.firstname, lastname: this.lastname,email: this.email,street: this.street,city: this.city,zip:this.zip})
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
}


  ngOnInit() {
  }

}
