import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_PRODUCT } from '../../../model/form-product';


/**
 * service proposant un FormGroup de type Product
 * le formulaire est disponible à partir du composant voulant l'utiliser
 */
@Injectable({
  providedIn: 'platform',
})
export class ProductFormService {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      [FORM_PRODUCT.ID]:[0,],
      [FORM_PRODUCT.NAME]: ['', Validators.required],
      [FORM_PRODUCT.DESCRIPTION]: ['', Validators.required],
      [FORM_PRODUCT.PRICE]: ['', [Validators.required,Validators.pattern('^[0-9]+(.|,)?[0-9]*$')]],
    });

  }
/** retour du formControl name */
  get name(): any {
    return this.formGroup.get([FORM_PRODUCT.NAME]);
  }
  /** gestion de l'erreur (required) du formControl name */
  get nameError(): boolean {
    return this.name.errors.required;
  }
  /** retour du formControl description */
  get description(): any {
    return this.formGroup.get([FORM_PRODUCT.DESCRIPTION]);
  }
  /** gestion de l'erreur (required) du formControl name */
  get descriptionError(): boolean {
    return this.description.errors.required;
  }
  /** retour du formControl price */
  get price(): any {
    return this.formGroup.get([FORM_PRODUCT.PRICE]);
  }
  /** gestion de l'erreur (required et pattern) du formControl name */
  get priceError(): boolean {
    return this.price.errors.required;
  }

}
