import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'packages', loadChildren: () => import('./modules/packages/packages.module').then(m => m.PackagesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }