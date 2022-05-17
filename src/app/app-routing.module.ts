import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./product-add/product-add.module').then(
        (m) => m.ProductAddModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./product-edit/product-edit.module').then(
        (m) => m.ProductEditModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./product-get/product-get.module').then(
        (m) => m.ProductGetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
