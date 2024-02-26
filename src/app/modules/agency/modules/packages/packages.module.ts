import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';
import { PackagesRoutingModule } from './packages-routing.module';
@NgModule({
  declarations: [
    MainComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }
