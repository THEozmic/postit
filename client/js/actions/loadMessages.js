const loadMessages = (messages) => {
  return {
    type: 'LOAD_MESSAGES',
    messages
  };
};

export default loadMessages;
