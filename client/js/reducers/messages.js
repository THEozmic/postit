const messages = (state = [], action) => {
  const { type, messages: mesages } = action;
  switch (type) {
    case 'LOAD_MESSAGES':
      return mesages;
    default:
      return state;
  }
};

export default messages;
