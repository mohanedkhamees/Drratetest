import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { doctorService } from 'src/app/Services/adddoctor.service';

@Component({
  selector: 'app-alldoctors',
  templateUrl: './alldoctors.component.html',
  styleUrls: ['./alldoctors.component.css']
})
export class AlldoctorsComponent implements OnInit {
  doctors: any;
  constructor(private alldoctor: doctorService, private routes: Router) { }

  ngOnInit(): void {
    this.loaddoctor();
  }

  loaddoctor() {
    this.alldoctor.viewdoctor().subscribe((data: any) => {
      this.doctors = data;
      console.log(data)
    })
  }


}
