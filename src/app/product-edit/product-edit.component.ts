import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FORM_PRODUCT } from '../core/model/form-product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFormService } from '../core/services/products/form/product-form.service';
import { ProductsService } from '../core/services/products/products.service';
import { LoadingSpinnerService } from '../core/services/loadingSpinner/loading-spinner.service';
import { MessageToastService } from '../core/services/message-toast/message-toast.service';
/** composant permettant
 * la mise à jour d'un produit
 */
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [ProductFormService],
})
export class ProductEditComponent implements OnInit {
  formControlName: typeof FORM_PRODUCT = FORM_PRODUCT;
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private productForm: ProductFormService,
    private productService: ProductsService,
    private loadingService: LoadingSpinnerService,
    private toastService:MessageToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingService.start();
    this.route.params.subscribe((params) => {
      this.productService.editProduct(params['id']).subscribe((product) => {
        this.loadingService.complete()
        this.formGroup.patchValue(product);
      });
    });
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
  /** mis à jour du produit */
  updateProduct() {
    this.loadingService.start();
    this.productService.updateProduct(this.formGroup.value).subscribe(() => {
      this.toastService.updateProduct(this.formGroup.value);
      this.router.navigate(['/products']);
    });
  }
}
