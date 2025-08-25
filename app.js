import express from 'express';
import 'dotenv/config';
import path from 'path';
import { indexController } from './controllers/indexController.js';

const app = express();
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexController);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at PORT: ${PORT}`);
});
