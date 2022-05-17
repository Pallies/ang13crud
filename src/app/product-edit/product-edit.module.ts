import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: ':id', component: ProductEditComponent }];

@NgModule({
  declarations: [ProductEditComponent],
  imports: [CommonModule,ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [ProductEditComponent, RouterModule],
})
export class ProductEditModule {}
