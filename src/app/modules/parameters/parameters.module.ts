import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParametersRoutingModule } from './parameters-routing.module';
import { GetTop250Component } from './movie/get-top250/get-top250.component';


@NgModule({
  declarations: [
    GetTop250Component
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule
  ]
})
export class ParametersModule { }
