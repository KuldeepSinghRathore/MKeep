const {
  signupUser,
  loginUser,
  userLabelUpdate,
} = require("../controllers/user.controller")

const router = require("express").Router()

router.route("/signup").post(signupUser)
router.route("/login").post(loginUser)
router.route("/labels").post(userLabelUpdate)
module.exports = router
