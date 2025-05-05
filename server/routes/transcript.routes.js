import express from 'express';
import { getTranscript } from '../controllers/transcript.controller.js';

const router = express.Router();

router.get('/:videoId', getTranscript);

export default router;