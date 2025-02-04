import React, { useState } from 'react';
import SermonCreator from './pages/SermonCreator';
import TheologicalStudy from './pages/TheologicalStudy';
import DevotionalCreator from './pages/DevotionalCreator';

const App = () => {
    const [activePage, setActivePage] = useState('sermon');

    const renderPage = () => {
        switch (activePage) {
            case 'sermon':
                return <SermonCreator />;
            case 'study':
                return <TheologicalStudy />;
            case 'devotional':
                return <DevotionalCreator />;
            default:
                return <SermonCreator />;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
                <button onClick={() => setActivePage('sermon')} style={{ margin: '0 10px' }}>Criar Sermão</button>
                <button onClick={() => setActivePage('study')} style={{ margin: '0 10px' }}>Estudo Teológico</button>
                <button onClick={() => setActivePage('devotional')} style={{ margin: '0 10px' }}>Criar Devocional</button>
            </nav>
            <div style={{flex: 1}}>
            {renderPage()}
            </div>
        </div>
    );
};

export default App;