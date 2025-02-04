import React, { useState } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';


const TheologicalStudy = () => {
    const [messages, setMessages] = useState([]);
    const [studyTopic, setStudyTopic] = useState('');

    const handleSendMessage = (message) => {
        setMessages([...messages, { text: message, sender: 'user' }]);
    };

    const handleStudyTopicChange = (event) => {
        setStudyTopic(event.target.value);
    };

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
             <label style={{display: "flex", flexDirection: "column"}}>
                <span>Tema do Estudo:</span>
                <input
                 type="text"
                 value={studyTopic}
                  onChange={handleStudyTopicChange}
                   placeholder="Digite o tema do estudo..."
                  style={{marginTop: '10px', padding: "10px", borderRadius: "5px", border:"1px solid #ddd"}}
                 />
             </label>
             {studyTopic && (
                <div>
                  <p>Tema Selecionado:{studyTopic}</p>
                   {/* Add aqui a lógica para buscar e mostrar o conteúdo do estudo*/}
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

export default TheologicalStudy;