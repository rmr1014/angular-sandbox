import { Routes } from '@angular/router';
import { AngularWelcomeComponent } from './angular-welcome/angular-welcome.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'card', component: CardComponent },
  { path: 'welcome', component: AngularWelcomeComponent },
];
