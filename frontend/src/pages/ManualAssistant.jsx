import React, { useState } from 'react';

const ManualAssistant = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/manual/search?query=${query}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data);
            } else {
                console.error('Erro na pesquisa:', response.statusText);
            }
        } catch (error) {
            console.error('Erro na pesquisa:', error);
        }
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
                <h2>Assistente do Manual</h2>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Digite sua pergunta..."
                />
                <button onClick={handleSearch}>Buscar no Manual</button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                {results.map((result) => (
                    <div key={result.id}>
                        <h3>{result.title}</h3>
                        <p>{result.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManualAssistant;