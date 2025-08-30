const messages = [
  {
    message: 'Hi there!',
    username: 'Amando',
    added: new Date(),
  },
  {
    message: 'Hello World!',
    username: 'Charles',
    added: new Date(),
  },
  {
    message: 'Wanker!',
    username: 'John Constantine',
    added: new Date(),
  },
];

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

export const getDashboard = (req, res) => {
  res.render('index', { messages, formatDate, getInitials });
};

export const getMessageForm = (req, res) => {
  res.render('messageForm', { messages });
};

export const createMessagePost = (req, res) => {
  const { username, message } = req.body;
  messages.push({ username, message, added: new Date(Date.now()) });

  res.redirect('/');
};
