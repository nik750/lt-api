import { Router, Request, Response, NextFunction } from 'express';
import { recordSale } from '../controllers/salesController';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  recordSale(req, res, next);
});

export default router;
