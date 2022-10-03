import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { faUserDoctor, faPrescriptionBottleMedical, faCircleInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  arzt = faUserDoctor;
  apotheke = faPrescriptionBottleMedical;
  Info = faCircleInfo;
  kontakt = faEnvelope;




  constructor() { }
  ngOnInit(): void {
  }
}
