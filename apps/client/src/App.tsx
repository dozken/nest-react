import './App.css';

import React, { useState } from 'react';

import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async (message: string) => {
    const response = await fetch(`http://${import.meta.env.VITE_API_URL}/api/conversation`, {
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
      <NewMessage onSendMessage={sendMessage} />
      <Messages messages={messages} />
    </div>
  );
}

export default App;
