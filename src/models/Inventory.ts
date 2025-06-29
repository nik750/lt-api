/**
 * @openapi
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         storeId:
 *           type: string
 *         product:
 *           type: string
 *         quantity:
 *           type: number
 *         price:
 *           type: number
 */
export interface Inventory {
  id: string;
  storeId: string;
  product: string;
  quantity: number;
  price: number;
}
