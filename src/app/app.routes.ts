import { Routes } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { ResultsComponent } from './components/results/results.component';

export const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'searchResults', component: ResultsComponent },
];
