const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const passport = require('passport')

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Profile
const User = require('../../models/User')

/*
  NOTE  Profile's test
  * @route  GET api/profile/test
  * @desc   Tests profile route 
  * @acess  Public
*/
router.get('/test', (request, response) => response.json({msg: "Profiles Works"}));

/*
  NOTE  GET Profile
  * @route  GET api/profile
  * @desc   Get current user's profile 
  * @acess  Private
*/
router.get('/', passport.authenticate('jwt', { session: false }), (request, response) => {
  const errors = {};

  Profile.findOne({ user: request.user.id })
    .then(profile => {
      if (!profile) {
        errors.noProfile = 'There is no profile for this user';
        return response.status(404).json(errors);
      }
      response.json(profile)
    })
    .catch(error => response.status(404).json(error));
});

module.exports = router;