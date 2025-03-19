import React from 'react';

const LyricCard = ({ original, translated, tone, language, genre, rating }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white mb-4">
      <h2 className="text-xl font-bold">Original Lyrics</h2>
      <p className="italic">{original}</p>

      <h2 className="text-xl font-bold mt-4">Weird Translation</h2>
      <p className="text-green-600">{translated}</p>

      <div className="mt-4">
        <p><strong>Tone:</strong> {tone}</p>
        <p><strong>Language:</strong> {language}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Rating:</strong> ⭐ {rating}/5</p>
      </div>
    </div>
  );
};

export default LyricCard;