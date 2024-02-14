import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";
import { TravelComponent } from "./components/travel/travel.component";
import { BlogComponent } from "./components/blog/blog.component";
import { PricingComponent } from "./components/pricing/pricing.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }