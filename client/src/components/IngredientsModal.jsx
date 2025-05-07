import React, { useState, useEffect } from 'react';

const IngredientsModal = ({ videoId, isOpen, onClose }) => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && videoId) {
      fetchTranscript(videoId);
    }
  }, [isOpen, videoId]);

  const fetchTranscript = async (videoId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:9100/api/v1/transcript/${videoId}`);

      if (!response.ok) {
        throw new Error(`Error fetching transcript: ${response.status}`);
      }

      const data = await response.json();

      console.log("ingredients data is",data)
      const rawIngredients = data.data?.ingredients;

      let parsedIngredients = [];

      if (typeof rawIngredients === 'string') {
        // Remove code block formatting from Gemini response
        const cleaned = rawIngredients.replace(/```json|```/g, '').trim();

        try {
          parsedIngredients = JSON.parse(cleaned);
        } catch (parseError) {
          console.error('Failed to parse ingredients JSON:', parseError);
          setError('Error parsing ingredients list.');
        }
      }

      setIngredients(parsedIngredients);
    } catch (err) {
      console.error('Failed to fetch transcript:', err);
      setError('Failed to load ingredients. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ingredients</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-[calc(80vh-4rem)]">
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : ingredients.length > 0 ? (
            <ul className="space-y-2 list-disc list-inside">
              {ingredients.map((item, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {item.ingredient}{"  "}({item.english})
                  {item.quantity ? ` — ${item.quantity}` : ''}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No ingredients found for this video.
            </p>
          )}
        </div>

        <div className="p-4 border-t dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default IngredientsModal;
