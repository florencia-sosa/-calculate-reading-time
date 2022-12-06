import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatorComponent } from './views/estimator/estimator.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: EstimatorComponent },
  { path: 'ejemplos', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
