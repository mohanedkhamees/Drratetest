import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/Header/header.component';
import { DashBoardComponent } from './components/Pages/dash-board/dash-board.component';
import { ApothekeComponent } from './components/Pages/apotheke/apotheke.component';
import { ArzteComponent } from './components/Pages/arzte/arzte.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { KontaktComponent } from './components/Pages/kontakt/kontakt.component';
import { UberunsComponent } from './components/Pages/uberuns/uberuns.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdddoctorComponent } from './components/Pages/adddoctor/adddoctor.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AlldoctorsComponent } from './components/Pages/alldoctors/alldoctors.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashBoardComponent,
    ApothekeComponent,
    ArzteComponent,
    LoginComponent,
    KontaktComponent,
    UberunsComponent,
    AdddoctorComponent,
    AlldoctorsComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
