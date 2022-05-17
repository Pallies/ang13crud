import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FORM_PRODUCT } from '../../model/form-product';
import Product from '../../model/product';
import { MessageToastService } from '../message-toast/message-toast.service';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  const toastService: MessageToastService = new MessageToastService();
  let service: ProductsService;
  const product: Product = {
    [FORM_PRODUCT.ID]: 1,
    [FORM_PRODUCT.NAME]: 'name',
    [FORM_PRODUCT.DESCRIPTION]: 'description',
    [FORM_PRODUCT.PRICE]: 0,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: ProductsService },
        { provide: MessageToastService, useValue: toastService },
      ],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
