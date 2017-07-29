const messages = (state = [], action) => {
  const { type, newMessage } = action;
  switch (type) {
    case 'SEND_MESSAGE':
      return [...state, newMessage];
    case 'LOAD_MESSAGES':
      return action.messages;
    default:
      return state;
  }
};

export default messages;
