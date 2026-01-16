const { userSignup } = require("../controllers/AuthController");
import express from 'express';
const router = express.Router();

router
    .route('/signup')
    .post(userSignup);

    export default router;