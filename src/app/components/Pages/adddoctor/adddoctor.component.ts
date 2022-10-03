import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { doctorService } from 'src/app/Services/adddoctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  adddoctor: any;
  constructor(private fb: FormBuilder, private routes: Router, private adddoctorservice: doctorService) {
    this.adddoctor = this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        fachbereich: ['', Validators.required],
        adresse: ['', Validators.required],
        telnummber: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }
  Adddoctor() {
    console.log(this.adddoctor.value);
    this.adddoctorservice.Adddoctor(this.adddoctor.value).subscribe((data: any) => {
      console.log(data);
      this.routes.navigate(['/adddoctor'])
    })
  }
}
