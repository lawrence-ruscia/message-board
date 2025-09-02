import { Pool } from 'pg';
import 'dotenv/config';

export const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASS,  
  port: process.env.DATABASE_PORT,
});
