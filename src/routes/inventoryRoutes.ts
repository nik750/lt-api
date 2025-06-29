import { Router } from 'express';
import { getInventory, addInventory } from '../controllers/inventoryController';

const router = Router();

/**
 * @openapi
 * /inventory:
 *   get:
 *     summary: Get all inventory items
 *     responses:
 *       200:
 *         description: List of inventory items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventory'
 *   post:
 *     summary: Add a new inventory item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       201:
 *         description: Inventory item created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 */
router.get('/', getInventory);
router.post('/', addInventory);

export default router;
