import React from 'react';

const Messages: React.FC<{ messages: string[] }> = (props) => {
  return (
    <ul>
      {props.messages.map((message) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
};

export default Messages;
