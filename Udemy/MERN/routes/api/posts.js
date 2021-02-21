const { request, response } = require('express');
const express = require('express');
const router = express.Router();


/*
  NOTE  Posts's test
  * @route  GET api/posts/test
  * @desc   Tests posts route 
  * @acess  Public
*/
router.get('/test', (request, response) => response.json({msg: "Post Works"}));

module.exports = router;