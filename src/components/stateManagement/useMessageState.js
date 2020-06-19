import { useState } from 'react';

export default initialValue => {
  const [messages, setMessages] = useState(initialValue);

  return {
    messages,
    addMessages: messageText => {
      setMessages([...messages, messageText]);
    },
    deleteMessages: messageIndex => {
      const newMessages = messages.filter((_, index) => index !== messageIndex);

      setMessages(newMessages);
    }
  };
};
