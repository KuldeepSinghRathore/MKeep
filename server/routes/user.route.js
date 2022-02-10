const {
  signupUser,
  loginUser,
  userLabelUpdate,
} = require("../controllers/user.controller")
const verifyAuth = require("../middlewares/verifyAuth")

const router = require("express").Router()

router.route("/signup").post(signupUser)
router.route("/login").post(loginUser)
router.route("/labels/new").post(verifyAuth, userLabelUpdate)
module.exports = router
