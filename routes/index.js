import { Router, urlencoded } from 'express';
import {
  getDashboard,
  getMessageForm,
  getMessageDetails,
  createMessagePost,
} from '../controllers/indexController.js';

export const index = Router();

index.get('/', getDashboard);
index.get('/new', getMessageForm);
index.get('/:id', getMessageDetails);

index.post('/new', createMessagePost);
