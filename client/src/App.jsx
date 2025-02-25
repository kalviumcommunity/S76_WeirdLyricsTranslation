import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TranslationForm from './components/TranslationForm';
import TranslationList from './components/TranslationList';

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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <TranslationForm onSaveTranslation={handleSaveTranslation} />
        <TranslationList translations={translations} />
      </div>
    </div>
  );
}

export default App;