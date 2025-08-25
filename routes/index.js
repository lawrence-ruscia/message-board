import { Router } from 'express';
import { getDashboard } from '../controllers/indexController.js';

export const index = Router();

index.get('/', getDashboard);
