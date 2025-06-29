import { Router } from 'express';
import { getStores, addStore } from '../controllers/storeController';

const router = Router();

/**
 * @openapi
 * /stores:
 *   get:
 *     summary: Get all stores
 *     responses:
 *       200:
 *         description: List of stores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Store'
 *   post:
 *     summary: Add a new store
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Store'
 *     responses:
 *       201:
 *         description: Store created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.get('/', getStores);
router.post('/', addStore);

export default router;
