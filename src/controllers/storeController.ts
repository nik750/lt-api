import { Request, Response } from 'express';
import { Store } from '../models/Store';

// Example in-memory store data
const stores: Store[] = [];

export const getStores = (req: Request, res: Response) => {
  res.json(stores);
};

export const addStore = (req: Request, res: Response) => {
  const store: Store = req.body;
  stores.push(store);
  res.status(201).json(store);
};
