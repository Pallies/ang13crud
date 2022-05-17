import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs';
import { FORM_PRODUCT } from '../core/model/form-product';
import Product from '../core/model/product';
import { ProductsService } from '../core/services/products/products.service';
import { ProductFormService } from '../core/services/products/form/product-form.service';
import { MessageToastService } from '../core/services/message-toast/message-toast.service';

/** composant aidant à l'ajout d'un produit
 * ProductFormService => contrôle le formulaire d'un Product
 * ProductsService => contrôle la demande envoyé (fetch)
 */
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
  providers: [ProductFormService],
})
export class ProductAddComponent implements OnInit {
  formControlName: typeof FORM_PRODUCT = FORM_PRODUCT;

  constructor(
    private productForm: ProductFormService,
    private productService: ProductsService,
    private toastService: MessageToastService
  ) {}

  ngOnInit(): void {
    this.toastService.clear();
  }

  get formGroup(): FormGroup {
    return this.productForm.formGroup;
  }
  get name(): AbstractControl {
    return this.productForm.name;
  }
  get errorName(): boolean {
    return this.productForm.nameError;
  }
  get description(): AbstractControl {
    return this.productForm.description;
  }
  get errorDescription(): boolean {
    return this.productForm.descriptionError;
  }
  get price(): AbstractControl {
    return this.productForm.price;
  }
  get errorPrice(): boolean {
    return this.productForm.priceError;
  }
  /** ajout d'un produit à la liste */
  addProduct() {
    this.productService.addProduct(this.formGroup.value).subscribe((product) => {
      this.toastService.addProduct(product);
    });
    this.formGroup.reset();
  }
}
