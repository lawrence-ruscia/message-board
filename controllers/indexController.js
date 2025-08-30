const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: 'Wanker!',
    user: 'John Constantine',
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
