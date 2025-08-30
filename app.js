import express from 'express';
import 'dotenv/config';
import path from 'path';
import { index } from './routes/index.js';

const app = express();
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', index);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at PORT: ${PORT}`);
});
