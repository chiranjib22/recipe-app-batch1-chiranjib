import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Favourites } from './favourites/favourites';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'favourites',
    component: Favourites,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
