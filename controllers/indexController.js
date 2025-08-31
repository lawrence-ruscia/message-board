const messages = [
  {
    id: '1',
    message: 'Hi there!',
    username: 'Amando',
    added: new Date('July 25, 2025 02:26:00'),
  },
  {
    id: '2',
    message: 'Hello World!',
    username: 'Charles',
    added: new Date('August 13, 2025 11:13:00'),
  },
  {
    id: '3',
    message: 'Wanker!',
    username: 'John Constantine',
    added: new Date('August 20, 2025 04:09:00'),
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
  res.render('index', {
    messages,
    formatDate,
    getInitials,
  });
};

export const getMessageForm = (req, res) => {
  res.render('messageForm', { messages });
};

export const getMessageDetails = (req, res) => {
  const { id } = req.params ?? '';
  const retrievedMessage = messages.find((msg) => msg.id === id);

  res.render('messageDetails', {
    messages,
    msg: retrievedMessage,
    formatDate,
    getInitials,
  });
};

export const createMessagePost = (req, res) => {
  const { username, message } = req.body;
  messages.push({
    id: crypto.randomUUID(),
    username,
    message,
    added: new Date(Date.now()),
  });

  res.redirect('/');
};
