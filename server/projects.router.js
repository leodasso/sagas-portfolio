const express = require('express');
const pool = require('./pool');

const router = express.Router();

router.get('/', (req, resp) => {
    console.log(' got request to get');
}); 

module.exports = router;