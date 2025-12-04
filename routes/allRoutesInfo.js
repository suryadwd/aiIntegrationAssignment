import express from 'express';
import { allRoutesInfo } from '../controllers/allRoutesInfo.js';

const router = express.Router();

// Root route mapping
router.get('/', allRoutesInfo);

export default router;
