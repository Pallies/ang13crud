import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductGetComponent } from './product-get.component';

const routes:Routes=[{path:'',component:ProductGetComponent}]

@NgModule({
  declarations: [ProductGetComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],exports:[ProductGetComponent,RouterModule]
})
export class ProductGetModule { }
