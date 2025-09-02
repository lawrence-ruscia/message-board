import 'dotenv/config';
import { Client } from 'pg';

const query = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (message, username, added)
VALUES 
    ('Hi, There!', 'Amando', '2025-07-25 14:26:00+00'),
    ('Hello World!', 'Charles', '2025-08-13 23:13:00+00'),
    ('Wanker!', 'John Constantine', '2025-08-20 16:09:00+00');
`;

const host = process.env.DATABASE_HOST;
const user = process.env.DATABASE_USER;
const database = process.env.DATABASE_NAME;
const password = process.env.DATABASE_PASS;
const port = process.env.DATABASE_PORT;

const client = new Client({
  connectionString: `postgresql://${user}:${password}@${host}:${port}/${database}`,
});

async function populate() {
  try {
    console.log('Seeding database...');

    await client.connect();
    await client.query(query);

    console.log('Database successfully populated!');
  } catch (err) {
    console.log('Error populating database: ', err.message);
  } finally {
    await client.end();
  }
}

populate();
