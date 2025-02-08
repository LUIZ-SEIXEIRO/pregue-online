import React, { useState } from 'react';

const ManualSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/search?query=${query}`);
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
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Digite sua pergunta..."
            />
            <button onClick={handleSearch}>Buscar no Manual</button>
            <div>
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

export default ManualSearch;