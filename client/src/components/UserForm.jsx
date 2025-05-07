import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const UserForm = () => {
  const [userInput, setUserInput] = useState({
    language: '',
    timing: '',
    vegetarian: false,
    nonVegetarian: false,
    dish: '',
  });

  const navigate = useNavigate();

  const languages = [
    { name: "English", code: "en" },
    { name: "Mandarin", code: "zh" },
    { name: "Hindi", code: "hi" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "Arabic", code: "ar" },
    { name: "Bengali", code: "bn" },
    { name: "Russian", code: "ru" },
    { name: "Portuguese", code: "pt" },
    { name: "Indonesian", code: "id" },
    { name: "Urdu", code: "ur" },
    { name: "German", code: "de" },
    { name: "Japanese", code: "ja" },
    { name: "Swahili", code: "sw" },
    { name: "Marathi", code: "mr" },
    { name: "Telugu", code: "te" },
    { name: "Turkish", code: "tr" },
    { name: "Tamil", code: "ta" },
    { name: "Vietnamese", code: "vi" },
    { name: "Korean", code: "ko" },
    { name: "Italian", code: "it" },
    { name: "Thai", code: "th" },
    { name: "Persian", code: "fa" },
    { name: "Polish", code: "pl" },
    { name: "Ukrainian", code: "uk" },
    { name: "Romanian", code: "ro" },
    { name: "Dutch", code: "nl" },
    { name: "Greek", code: "el" },
    { name: "Malay", code: "ms" },
    { name: "Punjabi", code: "pa" }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserInput(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTimingSelect = (timing) => {
    setUserInput(prev => ({ ...prev, timing }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { vegetarian, nonVegetarian, timing, language, dish } = userInput;
    
    console.log(userInput);
    const diet = vegetarian ? 'vegetarian' : nonVegetarian ? 'nonVegetarian' : 'none';

    const path = `/user/search/${diet}/${timing}/${language}${dish ? `?dish=${encodeURIComponent(dish)}` : ''}`;

    navigate(path);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Food Preferences</h2>

        {/* Dietary Preferences */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-700">Dietary Preferences</h3>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="vegetarian"
                checked={userInput.vegetarian}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Vegetarian</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="nonVegetarian"
                checked={userInput.nonVegetarian}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Non-vegetarian</span>
            </label>
          </div>
        </div>

        {/* Language Selection */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-700">Select Language</h3>
          <select
            name="language"
            value={userInput.language}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a language</option>
            {languages.map((language, index) => (
              <option key={index} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </div>

        {/* Timing Selection */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-700">Preferred Timing</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {['Morning', 'Noon', 'Afternoon', 'Night'].map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleTimingSelect(time)}
                className={`py-2 px-4 rounded-md transition-colors ${
                  userInput.timing === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Dish */}
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-700">Preferred Dish (Optional)</h3>
          <input
            type="text"
            name="dish"
            value={userInput.dish}
            onChange={handleInputChange}
            placeholder="E.g., Pasta, Biryani, Sushi"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Form Submission */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
