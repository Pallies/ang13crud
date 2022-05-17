import { TestBed } from '@angular/core/testing';
import { FORM_PRODUCT } from '../../model/form-product';
import Product from '../../model/product';
import { addProductToast, deleteProductToast, updateProductToast } from './mesage-toast';

import { MessageToastService } from './message-toast.service';


describe('MessageToastService', () => {
  let service: MessageToastService;
  let product:Product;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    product={ [FORM_PRODUCT.ID]:1,
      [FORM_PRODUCT.NAME]:'string',
      [FORM_PRODUCT.DESCRIPTION]: 'string',
      [FORM_PRODUCT.PRICE]: 0}
    service = TestBed.inject(MessageToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('toast add',()=>{
    service.addProduct(product)
    expect(service.message.getValue()).toEqual(addProductToast(product))
  })
  it('toast update',()=>{
    service.updateProduct(product)
    expect(service.message.getValue()).toEqual(updateProductToast(product))
  })
  it('toast delete',()=>{
    service.deleteProduct(product)
    expect(service.message.getValue()).toEqual(deleteProductToast(product))
  })
});
