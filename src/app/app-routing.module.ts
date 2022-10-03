import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApothekeComponent } from './components/Pages/apotheke/apotheke.component';
import { ArzteComponent } from './components/Pages/arzte/arzte.component';
import { DashBoardComponent } from './components/Pages/dash-board/dash-board.component';
import { KontaktComponent } from './components/Pages/kontakt/kontakt.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { UberunsComponent } from './components/Pages/uberuns/uberuns.component';
import { AdddoctorComponent } from './components/Pages/adddoctor/adddoctor.component';
import { AlldoctorsComponent } from './components/Pages/alldoctors/alldoctors.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'arzte', component: ArzteComponent },
  { path: 'apotheke', component: ApothekeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashBoardComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'uberuns', component: UberunsComponent },
  { path: 'adddoctor', component: AdddoctorComponent },
  { path: 'alldoctor', component: AlldoctorsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
