import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: DefaultComponent },
  {
    path: 'standalone',
    loadComponent: () =>
      import('./standalone/standalone.component').then(
        (m) => m.StandaloneComponent
      ),
  },
  {
    path: 'standalone2',
    loadComponent: () =>
      import('./standalone2/standalone2.component').then(
        (m) => m.StandaloneComponent2
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
