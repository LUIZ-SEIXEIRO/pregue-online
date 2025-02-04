import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
    const isSystemMessage = message.sender !== 'user';
    return (
      <div className={`chat-message ${isSystemMessage ? 'system-message' : 'user-message'}`}>
        {isSystemMessage && (
           <div className="system-icon-container">
              <img src="/pombinha.png" alt="Pombinha" className="system-icon" />
           </div>
        )}
        <div className="message-text">
           {message.text}
        </div>
       </div>
    );
};

export default ChatMessage;