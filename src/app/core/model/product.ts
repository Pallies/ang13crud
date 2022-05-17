import { FORM_PRODUCT } from './form-product';
/** class Product
 * produit sauvegardé
 * {
 * id
 * nom
 * description
 * prix
 * }
 */
export default class Product {
  [FORM_PRODUCT.ID]!: number;
  [FORM_PRODUCT.NAME]!: string;
  [FORM_PRODUCT.DESCRIPTION]!: string;
  [FORM_PRODUCT.PRICE]!: number;

  constructor(form: Product) {
    this[FORM_PRODUCT.ID] = form[FORM_PRODUCT.ID];
    this[FORM_PRODUCT.NAME] = form[FORM_PRODUCT.NAME];
    this[FORM_PRODUCT.DESCRIPTION] = form[FORM_PRODUCT.DESCRIPTION];
    this[FORM_PRODUCT.PRICE] = form[FORM_PRODUCT.PRICE];
  }
}
