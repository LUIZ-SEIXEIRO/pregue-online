import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={handleInputChange}
                style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    marginRight: '5px'
                }}
            />
            <button
                onClick={handleSend}
                style={{
                    padding: '10px 15px',
                    background: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Enviar
            </button>
        </div>
    );
};

export default ChatInput;