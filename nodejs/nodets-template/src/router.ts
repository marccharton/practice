import express from "express";
const router = express.Router();

import mainController from './controllers/mainController';

router.get('/', mainController.home);

export default router;