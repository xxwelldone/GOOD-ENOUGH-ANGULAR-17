import { Routes } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { ResultsComponent } from './components/results/results.component';
import { DetailsComponent } from './components/details/details.component';
import { FilmListComponent } from './components/film-list/film-list.component';

export const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'searchResults', component: ResultsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'filmlist', component: FilmListComponent },
];
