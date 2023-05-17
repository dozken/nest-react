import './App.css';

import React, { useState } from 'react';

import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessageHandler = (message: string) => {
    sendMessage(message);
  };

  async function sendMessage(message: string) {
    const response = await fetch('http://localhost:3000/api/conversation', {
      method: 'POST',
      body: JSON.stringify({ message: message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.text();
    setMessages((prevMessages) => {
      return prevMessages.concat(data);
    });
  }

  return (
    <div className="App">
      <NewMessage onSendMessage={sendMessageHandler} />
      <Messages messages={messages} />
    </div>
  );
}

export default App;
