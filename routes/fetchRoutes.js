import express from 'express';
import { fetchData } from '../controllers/fetchController.js';

const router = express.Router();

router.get('/', fetchData);

export default router;
