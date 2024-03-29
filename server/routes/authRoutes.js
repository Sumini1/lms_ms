const express = require("express");
const router = express.Router();
const { test } = require("../controllers/authControllers");
const cors = require('cors')

// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)
router.get('/', test)

module.exports = router
