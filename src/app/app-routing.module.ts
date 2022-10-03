import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApothekeComponent } from './components/apotheke/apotheke.component';
import { ArzteComponent } from './components/arzte/arzte.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { LoginComponent } from './component/login/login.component';
import { UberunsComponent } from './components/uberuns/uberuns.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'arzte', component: ArzteComponent },
  { path: 'apotheke', component: ApothekeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashBoardComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'uberuns', component: UberunsComponent },
  { path: 'adddoctor', component: AdddoctorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
