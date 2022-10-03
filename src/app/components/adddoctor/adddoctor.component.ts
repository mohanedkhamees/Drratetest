import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdddoctorService } from 'src/app/adddoctor.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  adddoctor: any;
  constructor(private fb: FormBuilder, routes: Router, private adddoctorservice: AdddoctorService) {
    this.adddoctor = fb.group(
      {
        First_name: ['', Validators.required],
        last_name: ['', Validators.required],
        fachberich: ['', Validators.required],
        adresse: ['', Validators.required],
        telnummber: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }
  Adddoctor() {
    console.log(this.adddoctor.void)
  }
}
