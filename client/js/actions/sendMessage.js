const sendMessage = (newMessage) => {
  return {
    type: 'SEND_MESSAGE',
    newMessage
  };
};

export default sendMessage;
