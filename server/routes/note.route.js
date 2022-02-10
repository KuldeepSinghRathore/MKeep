const {
  getAllNotes,
  deleteNote,
  updateNote,
  addNote,
} = require("../controllers/notes.controller")

const router = require("express").Router()
router.route("/notes").get(getAllNotes)
router.route("/notes/new").post(addNote)
router.route("/notes/:id").delete(deleteNote)
router.route("/notes/:id").post(updateNote)

module.exports = router
