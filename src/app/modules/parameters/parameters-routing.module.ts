import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTop250Component } from './movie/get-top250/get-top250.component';

const routes: Routes = [
  {
    path: "top250",
    component: GetTop250Component
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/movies/top250"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
