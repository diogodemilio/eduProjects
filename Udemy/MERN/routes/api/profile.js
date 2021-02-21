const { request, response } = require('express');
const express = require('express');
const router = express.Router();

/*
  NOTE  Profile's test
  * @route  GET api/profile/test
  * @desc   Tests profile route 
  * @acess  Public
*/
router.get('/test', (request, response) => response.json({msg: "Profiles Works"}));

module.exports = router;