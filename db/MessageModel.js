import { pool } from './pool.js';

const getAllMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

const getMessageById = async (id) => {
  const query = `SELECT * FROM messages WHERE id = $1`;
  const { rows } = await pool.query(query, [id]);

  return rows;
};

const insertMessagePost = async (username, message) => {
  const query = 'INSERT INTO messages (username, message) VALUES ($1, $2)';
  await pool.query(query, [username, message]);
};

export default {
  getAllMessages,
  getMessageById,
  insertMessagePost,
};
