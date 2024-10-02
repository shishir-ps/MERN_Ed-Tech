import express from "express";
import authControllers from '../controllers/auth-controllers.js';

const router = express.Router();

router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register);






export default router;

