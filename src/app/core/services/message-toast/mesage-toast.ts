import { Toast } from 'src/app/core/model/toast';
import { ALERT_BS } from '../../model/alert';
import Product from '../../model/product';

export const deleteProductToast = (
  product: Product,
  alert: string = ALERT_BS.WARNING
): Toast => {
  const message = `suppresion du produit ${product.productName}`;
  const title = 'Suppression';
  const type = 'Product';
  return new Toast(title, message, alert, type);
};
export const addProductToast = (
  product: Product,
  alert: string = ALERT_BS.SUCCESS
): Toast => {
  const message = ` produit ${product.productName} ajouté à la liste`;
  const title = 'ADD';
  const type = 'Product';
  return new Toast(title, message, alert, type);
};
export const updateProductToast = (
  product: Product,
  alert: string = ALERT_BS.INFO
): Toast => {
  const message = `Mise à jour du produit ${product.productName}`;
  const title = 'MAJ';
  const type = 'Product';
  return new Toast(title, message, alert, type);
};

export const errorProductToast = (
  e: Error,
  alert: string = ALERT_BS.DANGER
): Toast => {
  const message = ` !!! :  ${e.message}`;
  const title = 'ERROR';
  const type = 'ErrorMessage';
  return new Toast(title, message, alert, type);
};
