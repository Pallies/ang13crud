import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FORM_PRODUCT } from 'src/app/core/model/form-product';

import { ProductFormService } from './product-form.service';

describe('ProductFormService', () => {
  const formBuilder: FormBuilder = new FormBuilder();
  let service: ProductFormService ;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ProductFormService },
        { provide: FormBuilder, useValue: formBuilder },
      ],
    });
    service=TestBed.inject(ProductFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('value default form', () => {
    expect(service.name.value).toBe('');
    expect(service.description.value).toBe('');
    expect(service.price.value).toBe('');
    expect(service.formGroup.get(FORM_PRODUCT.ID)?.value).toEqual(0);
  });
  it('update value form',()=>{

    service.formGroup.setValue({
      [FORM_PRODUCT.ID]:1,
      [FORM_PRODUCT.NAME]:'name',
      [FORM_PRODUCT.DESCRIPTION]: 'description',
      [FORM_PRODUCT.PRICE]: 0})
      expect(service.name.value).toBe('name');
      expect(service.description.value).toBe('description');
      expect(service.price.value).toBe(0);
      expect(service.formGroup.get(FORM_PRODUCT.ID)?.value).toEqual(1);
  })
});
