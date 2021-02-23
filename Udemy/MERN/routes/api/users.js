const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

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
  const { errors, isValid } = validateRegisterInput(request.body);

  // Check Validation
  if (!isValid) {
    return response.status(400).json(errors);
  }

  User.findOne({ email: request.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return response.status(400).json(errors);
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

  const { errors, isValid } = validateLoginInput(request.body);

  // Check Validation
  if (!isValid) {
    return response.status(400).json(errors);
  }

  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return response.status(400).json(errors);
      }
      // Check Password

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) { // User Matched
            const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create jwt payload

            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (error, token) => {
                response.json({
                  success: true,
                  token: 'Bearer ' + token
                });
            });
          } else {
            errors.password = 'Password incorrect';
            response.status(400).json(errors);
          }
            
        });
    });
});

/*
  NOTE  Return current user
  * @route  GET api/users/current
  * @desc   Return current user
  * @acess  Private
*/
router.get('/current', passport.authenticate('jwt', { session: false }), (request, response) => {
  response.json(request.user);
});

module.exports = router;