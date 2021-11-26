import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteExampleComponent } from './route-example/route-example.component';

const routes: Routes = [
  {path:'example',component:RouteExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
