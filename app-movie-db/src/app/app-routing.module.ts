import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/login-form/components/login-form/login-form.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/movies-and-series/movies-and-series.module').then((m) => m.MoviesAndSeriesModule)},
  {path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule)},
  {path: 'series', loadChildren: () => import('./modules/series/series.module').then((m) => m.SeriesModule)},
  {path: 'search', loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchModule)},
  {path: 'login', loadChildren: () => import('./modules/login-form/login-form.module').then((m) => m.LoginFormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
