import axios from 'axios';

export const getYouTubeResults = async (req, res) => {
  const { query, language = 'en' } = req.query;
  console.log({ query, language });

  if (!query) {
    return res.status(400).json({ message: 'Missing required parameter: query' });
  }


  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
// console.log("IP address is", ip);

let country = 'IN'; // fallback

try {
  // In production, replace 'ip' with a real public IP
  const response = await axios.get(`https://ipapi.co/${ip}/json/`);
  const countryCode = response.data; // e.g., "US"
  console.log("Country code:", response);
  if (countryCode) {
    country = countryCode;
  }
} catch (e) {
  console.warn('Geo IP lookup failed, using default country');
}


  const API_KEY = process.env.YOUTUBE_API_KEY;
  const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

  try {
    const response = await axios.get(YOUTUBE_URL, {
      params: {
        key: API_KEY,
        q: query,
        maxResults: 10,
        part: 'snippet',
        type: 'video',
        relevanceLanguage: language,
        regionCode: country,
        safeSearch: 'strict',
        videoDuration: 'medium',
      },
    });

    const results = response.data.items.map(item => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));

    res.json({ results });
  } catch (error) {
    console.error('YouTube API error:', error?.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch YouTube results' });
  }
};
