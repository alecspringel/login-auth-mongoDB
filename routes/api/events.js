const express = require("express");
const router = express.Router();
const { authUser } = require("../../middleware/authUser");
const User = require("../../models/User");
const Event = require("../../models/Event");

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

// @route POST api/events/create
// @desc Create new event
// @access Private - Requires valid JWT token
router.post("/create", authUser, (req, res) => {
  User.findById(req.user.id).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "User does not exist" });
    } else {
      const newEvent = new Event({
        title: "First Event Ever"
      });

      user.events.push(newEvent)
      user.save();
      res.send(newEvent);
    }
  });
});

module.exports = router;