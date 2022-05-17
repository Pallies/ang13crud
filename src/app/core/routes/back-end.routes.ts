import { environment } from "src/environments/environment";

/** constante de route de communication avec le back-end */
export const TABLE = {
  PRODUCTS: 'products',
};
/** url de communication pour ProductsService */
export const URL_BACK_END = {
  BASE: `${environment.baseUrl}`,
  PRODUCTS: `${environment.baseUrl}/${TABLE.PRODUCTS}`,
};
