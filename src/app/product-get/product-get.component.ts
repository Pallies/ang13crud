import { Component, OnInit } from '@angular/core';
import { FORM_PRODUCT } from '../core/model/form-product';
import Product from '../core/model/product';
import { LoadingSpinnerService } from '../core/services/loadingSpinner/loading-spinner.service';
import { MessageToastService } from '../core/services/message-toast/message-toast.service';
import { ProductFormService } from '../core/services/products/form/product-form.service';
import { ProductsService } from '../core/services/products/products.service';

/** composant permettant
 * la navigation vers la page de modification
 * ou
 * la suppression
 * d'un produit
 */
@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.scss'],
  providers: [ProductFormService],
})
export class ProductGetComponent implements OnInit {
  products!: Product[];
  productDelete!: Product;
  PRODUCT: typeof FORM_PRODUCT = FORM_PRODUCT;
  constructor(
    private productService: ProductsService,
    private loadingService: LoadingSpinnerService,
    private toastService: MessageToastService
  ) {}

  ngOnInit(): void {
    this.loadingService.start();
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.loadingService.complete();
    });
  }
  /** demande de suppression */
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => {
        if (product.id == id)
          this.toastService.deleteProduct(product);
        return product.id !== id;
      });
    });
  }
}
