import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
const routes:Routes=[
  {path:'create',component:ProductAddComponent}
]
@NgModule({
  declarations: [ProductAddComponent],
  imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild(routes)],
  exports: [ProductAddComponent,RouterModule],
})
export class ProductAddModule {}
