import { Router } from 'express';
import { getDailyReport, getMonthlyReport, getYearlyReport } from '../controllers/reportController';

const router = Router();

router.get('/daily', getDailyReport);
router.get('/monthly', getMonthlyReport);
router.get('/yearly', getYearlyReport);

export default router;
