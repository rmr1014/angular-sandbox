import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularWelcomeComponent } from './angular-welcome/angular-welcome.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'welcome', component: AngularWelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
