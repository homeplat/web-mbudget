import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

@NgModule({
  declarations: [
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    UnderConstructionComponent
  ]
})
export class SharedModule { }
