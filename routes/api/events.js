const express = require("express");
const router = express.Router();
const { authUser } = require("../../middleware/authUser");
const User = require("../../models/User");

// @route POST api/events
// @desc Retrieve logged in user's events
// @access Private - Requires valid JWT token
router.get('/', authUser, (req, res) => {
  // Get authorized user from decoded token (in middleware)
  const authUserID = req.user.id;
  User.findById( authUserID ).then((user) => {
    res.send(user.events)
  })
})

module.exports = router;