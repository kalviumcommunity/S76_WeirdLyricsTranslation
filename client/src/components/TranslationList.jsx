export default function TranslationList({ translations }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Saved Translations</h2>
        {translations.length === 0 ? (
          <p>No translations yet. Start translating!</p>
        ) : (
          <ul>
            {translations.map((translation, index) => (
              <li key={index} className="mb-4 p-4 bg-gray-50 rounded">
                <p><strong>Original:</strong> {translation.original}</p>
                <p><strong>Translated:</strong> {translation.translated}</p>
                <p><strong>Tone:</strong> {translation.tone}</p>
                <p><strong>Language:</strong> {translation.language}</p>
                <p><strong>Genre:</strong> {translation.genre}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }