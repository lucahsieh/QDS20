import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** the routers of the pages */
const routes: Routes = [
  // {path:'', component: NameOfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
