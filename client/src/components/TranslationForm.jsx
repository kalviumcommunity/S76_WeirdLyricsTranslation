import React, { useState } from 'react';

export default function TranslationForm({ onSaveTranslation }) {
  const [original, setOriginal] = useState('');
  const [tone, setTone] = useState('playful');
  const [language, setLanguage] = useState('en');
  const [genre, setGenre] = useState('pop');

  const handleTranslate = async () => {
    const translated = `Weird translation of: ${original}`; // Replace with actual translation logic
    const newTranslation = { original, translated, tone, language, genre };
    onSaveTranslation(newTranslation);
    setOriginal(''); // Clear the input field
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Translate Your Lyrics</h2>
      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Paste your lyrics here..."
        value={original}
        onChange={(e) => setOriginal(e.target.value)}
      />
      <div className="flex space-x-4 mb-4">
        <select
          className="p-2 border rounded"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="playful">Playful</option>
          <option value="serious">Serious</option>
          <option value="sad">Sad</option>
        </select>
        <select
          className="p-2 border rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="tn">Tamil</option>
          <option value="ka">Kannada</option>
          <option value="hi">Hindi</option>
        </select>
        <select
          className="p-2 border rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hip-hop">Hip-Hop</option>
        </select>
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleTranslate}
      >
        Translate
      </button>
    </div>
  );
}