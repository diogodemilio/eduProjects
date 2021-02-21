const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load User model
const User = require('../../models/User');

/*
  NOTE  Users's test
  * @route  GET api/users/test
  * @desc   Tests users route 
  * @acess  Public
*/
router.get('/test', (request, response) => response.json({msg: "Users Works"}));

/*
  NOTE  Users's registration
  * @route  GET api/users/register
  * @desc   Register user
  * @acess  Public
*/
router.post('/register', (request, response) => {
  User.findOne({ email: request.body.email })
    .then(user => {
      if (user) {
        return response.status(400).json({email: 'Email already exists'});
      } else {
        const avatar = gravatar.url(request.body.email, {
          s: '200', // Size
          r: 'pg',  // Rating
          d: 'mm',  // Default
        });

        const newUser = new User({
          name: request.body.name,
          email: request.body.email,
          password: request.body.password,
          avatar: avatar
        });

        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) {
              throw error;
            }
            newUser.password = hash;
            newUser
              .save()
              .then(user => response.json(user))
              .catch(error => console.log(error)) 
          })
        })
      }
    })
});

/*
  NOTE  Users's login
  * @route  GET api/users/login
  * @desc   Login User / Returning JWT Token
  * @acess  Public
*/
router.post('/login', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return response.status(404).json({ email: 'User not found' });
      }
      
      // Check Password

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch)
            response.json({ msg: 'Success' });
          else
            response.status(400).json({ password: 'Password incorrect' });
        });
    });
});

module.exports = router;