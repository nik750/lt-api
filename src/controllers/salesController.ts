import { Request, Response, NextFunction } from 'express';
import pool from '../db';

/**
 * @openapi
 * /sales:
 *   post:
 *     summary: Record a sale and update inventory quantity
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               inventoryId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Sale recorded and inventory updated
 *       400:
 *         description: Not enough inventory
 *       404:
 *         description: Inventory item not found
 *       500:
 *         description: Database error
 */

export const recordSale = (req: Request, res: Response, next: NextFunction) => {
  const { inventoryId, quantity } = req.body;
  pool.query('SELECT quantity FROM inventory WHERE id = $1', [inventoryId])
    .then(({ rows }) => {
      if (rows.length === 0) {
        res.status(404).json({ error: 'Inventory item not found' });
        return;
      }
      if (rows[0].quantity < quantity) {
        res.status(400).json({ error: 'Not enough inventory' });
        return;
      }
      return pool.query('UPDATE inventory SET quantity = quantity - $1 WHERE id = $2', [quantity, inventoryId])
        .then(() => pool.query('INSERT INTO sales (inventory_id, quantity, sale_date) VALUES ($1, $2, NOW())', [inventoryId, quantity]))
        .then(() => res.json({ message: 'Sale recorded and inventory updated' }));
    })
    .catch((err) => next(err));
};
