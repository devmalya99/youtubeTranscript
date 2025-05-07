import { useEffect, useState } from 'react';
import YouTubeResults from '../components/YoutubeResults';
import { useLocation, useParams } from 'react-router';

const YouTubeSearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { diet, timing, language } = useParams();
  const { search } = useLocation();

   // Properly handle the query string
   const searchParams = new URLSearchParams(search);

  const dish = searchParams.get('dish');
  console.log({ diet, timing, language, dish });

  // Create the search query string
  const youtubeQuery = `${diet} dish for ${timing} ${dish || ''}`.trim();

  // Encode for URL (replaces spaces with + and handles special chars)
  const encodedQuery = encodeURIComponent(youtubeQuery)
    .replace(/%20/g, '+') // Replace %20 with + for better YouTube compatibility
    .replace(/%2C/g, ',');



  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `http://localhost:9100/api/v1/youtube/search?query=${encodedQuery}&language=${language}`
        );
        const data = await res.json();
        console.log(data)
        setResults(data.results);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold text-center py-6">Recipe Videos</h1>
      {loading ? <p className="text-center">Loading...</p> : <YouTubeResults results={results} />}
    </main>
  );
};

export default YouTubeSearchPage;
