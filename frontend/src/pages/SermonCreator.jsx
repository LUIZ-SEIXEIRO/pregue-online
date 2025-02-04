import React, { useState } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import BibleSelector from '../components/BibleSelector';

const SermonCreator = () => {
    const [messages, setMessages] = useState([]);
    const [selectedVerse, setSelectedVerse] = useState(null);

    const handleSendMessage = (message) => {
        setMessages([...messages, { text: message, sender: 'user' }]);
    };

    const handleVerseSelect = (verse) => {
        setSelectedVerse(verse);
    }
    return (
       <div style={{
           display: 'flex',
           flexDirection: 'column',
           width: '600px',
           margin: '20px auto',
           border: '1px solid #ddd',
           borderRadius: '8px',
           overflow: 'hidden',
           flex: 1
       }}>
           <div style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
               <BibleSelector onSelect={handleVerseSelect} />
               {selectedVerse && (
                   <div>
                       <p>Versículo selecionado: {selectedVerse}</p>
                       {/* Add aqui a lógica para buscar e mostrar o versículo da API */}
                   </div>
               )}
           </div>
           <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column' }}>
               {messages.map((message, index) => (
                   <ChatMessage key={index} message={message} />
               ))}
           </div>
           <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
               <ChatInput onSendMessage={handleSendMessage} />
           </div>
       </div>
    );
};

export default SermonCreator;