/**
 * @openapi
 * components:
 *   schemas:
 *     Store:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         location:
 *           type: string
 */
export interface Store {
  id: string;
  name: string;
  location: string;
}
