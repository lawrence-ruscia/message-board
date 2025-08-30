import { Router, urlencoded } from 'express';
import {
  getDashboard,
  getMessageForm,
  createMessagePost,
} from '../controllers/indexController.js';

export const index = Router();

index.get('/', getDashboard);
index.get('/new', getMessageForm);

index.post('/new', createMessagePost);
