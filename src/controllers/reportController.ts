import { Request, Response } from 'express';
import pool from '../db';

/**
 * @openapi
 * /reports/daily:
 *   get:
 *     summary: Get daily sales report
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Date for the report (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Daily sales report
 *       500:
 *         description: Database error
 * /reports/monthly:
 *   get:
 *     summary: Get monthly sales report
 *     parameters:
 *       - in: query
 *         name: month
 *         schema:
 *           type: string
 *           pattern: '^[0-9]{4}-[0-9]{2}$'
 *         required: true
 *         description: Month for the report (YYYY-MM)
 *     responses:
 *       200:
 *         description: Monthly sales report
 *       500:
 *         description: Database error
 * /reports/yearly:
 *   get:
 *     summary: Get yearly sales report
 *     parameters:
 *       - in: query
 *         name: year
 *         schema:
 *           type: string
 *           pattern: '^[0-9]{4}$'
 *         required: true
 *         description: Year for the report (YYYY)
 *     responses:
 *       200:
 *         description: Yearly sales report
 *       500:
 *         description: Database error
 */

export const getDailyReport = async (req: Request, res: Response) => {
  const { date } = req.query;
  try {
    const result = await pool.query(
      `SELECT i.product, SUM($1) as sold_quantity
       FROM sales s
       JOIN inventory i ON s.inventory_id = i.id
       WHERE s.sale_date::date = $1
       GROUP BY i.product`,
      [date]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};

export const getMonthlyReport = async (req: Request, res: Response) => {
  const { month } = req.query;
  try {
    const result = await pool.query(
      `SELECT i.product, SUM(s.quantity) as sold_quantity
       FROM sales s
       JOIN inventory i ON s.inventory_id = i.id
       WHERE TO_CHAR(s.sale_date, 'YYYY-MM') = $1
       GROUP BY i.product`,
      [month]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};

export const getYearlyReport = async (req: Request, res: Response) => {
  const { year } = req.query;
  try {
    const result = await pool.query(
      `SELECT i.product, SUM(s.quantity) as sold_quantity
       FROM sales s
       JOIN inventory i ON s.inventory_id = i.id
       WHERE TO_CHAR(s.sale_date, 'YYYY') = $1
       GROUP BY i.product`,
      [year]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};
