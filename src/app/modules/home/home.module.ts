import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MainComponent } from './components/main/main.component';
import { MostSearchedComponent } from './components/most-searched/most-searched.component';
import { HomeRoutingModule } from './home-routing.module';
import { TravelComponent } from './components/travel/travel.component';
import { BlogComponent } from './components/blog/blog.component';



@NgModule({
  declarations: [
    SearcherComponent,
    MainComponent,
    MostSearchedComponent,
    TravelComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ], 
  exports: [
    SearcherComponent,
    MainComponent
  ]
})
export class HomeModule { }
