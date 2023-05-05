import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// enrutamiento para que siempre nos lleve a la pagina que muestra las peliculas
const routes: Routes = [
  {
    path: "movies",
    loadChildren: () => import("./modules/parameters/parameters.module").then(x => x.ParametersModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/movies/top250"
  },
  {
    path: "**",
    redirectTo: "/movies/top250"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
