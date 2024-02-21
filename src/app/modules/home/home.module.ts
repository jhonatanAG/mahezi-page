import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MainComponent } from './components/main/main.component';
import { MostSearchedComponent } from './components/most-searched/most-searched.component';
import { HomeRoutingModule } from './home-routing.module';
import { TravelComponent } from './components/travel/travel.component';
import { BlogComponent } from './components/blog/blog.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { EntryBlogComponent } from './components/entry-blog/entry-blog.component';



@NgModule({
  declarations: [
    SearcherComponent,
    MainComponent,
    MostSearchedComponent,
    TravelComponent,
    BlogComponent,
    CarouselComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    EntryBlogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    MainComponent,
    SearcherComponent,
    CarouselComponent
  ]
})
export class HomeModule { }
