import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";
import { TravelComponent } from "./components/travel/travel.component";
import { BlogComponent } from "./components/blog/blog.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent } from "./components/services/services.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }