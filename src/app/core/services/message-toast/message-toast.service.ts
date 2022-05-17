import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toast } from 'src/app/core/model/toast';
import Product from '../../model/product';
import { addProductToast, deleteProductToast, errorProductToast, updateProductToast } from './mesage-toast';

@Injectable({
  providedIn: 'root',
})
export class MessageToastService {
  message: BehaviorSubject<Toast> = new BehaviorSubject(new Toast('', ''));
  constructor() {}

  clear(){
    this.message.next(new Toast('', ''))
  }
  addProduct(product: Product): void {
    this.message.next(addProductToast(product));
  }
  updateProduct(product: Product): void {
    this.message.next(updateProductToast(product));
  }
  deleteProduct(product: Product): void {
    this.message.next(deleteProductToast(product));
  }
  errorProduct(e:Error):void{
    this.message.next(errorProductToast(e))
  }
  getMessage():Observable<Toast>{
    return this.message;
  }
}
