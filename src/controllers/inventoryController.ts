import { Request, Response } from 'express';
import { Inventory } from '../models/Inventory';
import pool from '../db';

export const getInventory = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM inventory');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};

export const addInventory = async (req: Request, res: Response) => {
  const { id, storeId, product, quantity, price } = req.body as Inventory;
  try {
    const result = await pool.query(
      'INSERT INTO inventory (id, storeId, product, quantity, price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id, storeId, product, quantity, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};
