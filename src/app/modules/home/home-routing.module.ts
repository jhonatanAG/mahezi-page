import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";
import { TravelComponent } from "./components/travel/travel.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'travel', component: TravelComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }