export const loadMessages = messages => ({
  type: 'LOAD_MESSAGES',
  messages
});

export const sendMessage = newMessage => ({
  type: 'SEND_MESSAGE',
  newMessage
});

