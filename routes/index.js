import { Router } from 'express';
import {
  getDashboard,
  getMessageForm,
} from '../controllers/indexController.js';

export const index = Router();

index.get('/', getDashboard);
index.get('/new', getMessageForm);
