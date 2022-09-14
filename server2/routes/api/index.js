/*
api/index.js mounts all routes inside the api folder
these routes are mounted in ../server.js on the route '/api'
*/
const express = require('express');
const contact = require('./contact');
const content = require('./content');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API is working'
  });
});

router.use('/contact', contact);
router.use('/content', content);

module.exports = router;