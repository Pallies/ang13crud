import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import Product from '../../model/product';
import { URL_BACK_END } from '../../routes/back-end.routes';
import { MessageToastService } from '../message-toast/message-toast.service';

/** service CRUD pour les produits stockés */
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private toastService: MessageToastService
  ) {}
  /** retourne tous les produits sauvegardés */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL_BACK_END.PRODUCTS}`).pipe(
      catchError((err) => {
        return throwError(() => this.errorManaged(err));
      })
    );
  }
  /** retourne un des produits sauvegardés selon 'id' envoyé */
  editProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${URL_BACK_END.PRODUCTS}/${id}`).pipe(
      catchError((err) => {
        return throwError(() => this.errorManaged(err));
      })
    );
  }
  /** ajoute un produit à la liste sauvegardé */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${URL_BACK_END.PRODUCTS}`, product).pipe(
      catchError((err) => {
        return throwError(() => this.errorManaged(err));
      })
    );
  }
  /** met à jour le produit transmis */
  updateProduct(product: Product): Observable<Product> {
    return this.http
      .put<Product>(`${URL_BACK_END.PRODUCTS}/${product.id}`, product)
      .pipe(
        catchError((err) => {
          return throwError(() => this.errorManaged(err));
        })
      );
  }
  /** supprime le produit transmis de la liste */
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(`${URL_BACK_END.PRODUCTS}/${id}`).pipe(
      catchError((err) => {
        return throwError(() => this.errorManaged(err));
      })
    );
  }
  errorManaged(err: Error) {
    this.toastService.errorProduct(err);
    return throwError(() => 'error add product');
  }
}
