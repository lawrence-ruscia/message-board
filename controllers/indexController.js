import MessageModel from '../db/MessageModel.js';

function formatDate(date = new Date()) {
  return date
    .toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(',', '');
}

function getInitials(name) {
  if (!name) return '';

  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase()) // take first letter of each word
    .join('');
}

export const getDashboard = async (req, res) => {
  const messages = await MessageModel.getAllMessages();

  res.render('index', {
    messages,
    formatDate,
    getInitials,
  });
};

export const getMessageForm = async (req, res) => {
  const messages = await MessageModel.getAllMessages();
  res.render('messageForm', { messages });
};

export const getMessageDetails = async (req, res) => {
  const { id } = req.params ?? '';

  const messages = await MessageModel.getAllMessages();
  const [retrievedMessage] = await MessageModel.getMessageById(id);
  console.log(retrievedMessage);

  res.render('messageDetails', {
    messages,
    msg: retrievedMessage,
    formatDate,
    getInitials,
  });
};

export const createMessagePost = async (req, res) => {
  const { username, message } = req.body;
  await MessageModel.insertMessagePost(username, message);
  res.redirect('/');
};
