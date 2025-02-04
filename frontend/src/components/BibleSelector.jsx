import React, { useState, useEffect } from 'react';

const BibleSelector = ({ onSelect }) => {
    const [books, setBooks] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');

    useEffect(() => {
        const fetchBibleBooks = async () => {
            try {
                const response = await fetch('/api/books');
                if (response.ok) {
                    const data = await response.json();
                    setBooks(data);
                } else {
                    console.error('Error fetching bible books:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching bible books:', error);
            }
        };
        fetchBibleBooks();
    }, []);

    useEffect(() => {
        const fetchBibleChapters = async () => {
            if (selectedBook) {
                try {
                    const response = await fetch(`/api/chapters/${selectedBook}`);
                    if (response.ok) {
                        const data = await response.json();
                        setChapters(data);
                    } else {
                        console.error('Error fetching bible chapters:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching bible chapters:', error);
                }
            } else {
                 setChapters([])
            }

        };
        fetchBibleChapters();
    }, [selectedBook]);


    const handleBookSelect = (event) => {
        setSelectedBook(event.target.value);
        setSelectedChapter('');
    };

    const handleChapterSelect = (event) => {
        setSelectedChapter(event.target.value);
    };

    const handleSelect = () => {
        if (selectedBook && selectedChapter) {
            onSelect(`${selectedBook} ${selectedChapter}`);
        }
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
                Livro:
                <select value={selectedBook} onChange={handleBookSelect}>
                    <option value="">Selecione um livro</option>
                    {books.map((book) => (
                        <option key={book} value={book}>
                            {book}
                        </option>
                    ))}
                </select>
            </label>
            <label style={{marginTop: '10px'}}>
                Capítulo:
                <select value={selectedChapter} onChange={handleChapterSelect}>
                    <option value="">Selecione um capítulo</option>
                    {chapters.map((chapter) => (
                        <option key={chapter} value={chapter}>
                            {chapter}
                        </option>
                    ))}
                </select>
            </label>
            <button onClick={handleSelect} style={{ marginTop: '10px' }}>Selecionar</button>
        </div>
    );
};

export default BibleSelector;