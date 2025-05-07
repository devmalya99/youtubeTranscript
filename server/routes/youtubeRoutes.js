import express from 'express';
import { getYouTubeResults } from '../controllers/youtubeController.js';

const router = express.Router();

router.get('/search', getYouTubeResults);

export default router;
