import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TranslationForm from './components/TranslationForm';
import TranslationList from './components/TranslationList';
import LyricCard from './components/LyricCard'; // Import the new LyricCard component

function App() {
  const [translations, setTranslations] = useState([]);

  // Fetch all translations from the backend
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/lyrics');
        setTranslations(response.data);
      } catch (err) {
        console.error('Failed to fetch translations:', err);
      }
    };
    fetchTranslations();
  }, []);

  // Handle saving a new translation
  const handleSaveTranslation = async (newTranslation) => {
    try {
      const response = await axios.post('http://localhost:5000/api/lyrics', newTranslation);
      setTranslations([...translations, response.data]);
    } catch (err) {
      console.error('Failed to save translation:', err);
    }
  };

  // Dummy data for testing LyricCard
  const dummyData = {
    original: "I can't feel my face when I'm with you",
    translated: "My face has gone completely numb from your vibes",
    tone: "playful",
    language: "en",
    genre: "pop",
    rating: 4.5,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <TranslationForm onSaveTranslation={handleSaveTranslation} />

        {/* Render the LyricCard with dummy data */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Example Lyric Card</h2>
        <LyricCard {...dummyData} />

        {/* Render the TranslationList with fetched translations */}
        <TranslationList translations={translations} />
      </div>
    </div>
  );
}

export default App;