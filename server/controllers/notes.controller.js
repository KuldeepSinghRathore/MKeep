const catchAsyncHandler = require("../middlewares/catchAsyncHandler")
const { Note } = require("../models/notes.model")

const addNote = catchAsyncHandler(async (req, res, next) => {
  const newNote = new Note(req.body)

  const note = await newNote.save()
  res.status(200).json({
    success: true,
    note,
  })
})

const getAllNotes = catchAsyncHandler(async (req, res, next) => {
  const notes = await Note.find()
  res.status(200).json({
    success: true,
    notes,
  })
})

const deleteNote = catchAsyncHandler(async (req, res, next) => {
  const note = await Note.findById(req.params.id)
  const deletedNote = await note.remove()
  deletedNote.isDeleted = true
  res.status(200).json({
    success: true,
    note: deletedNote,
  })
})

const updateNote = catchAsyncHandler(async (req, res, next) => {
  const noteFromBody = req.body
  const noteFromDb = await Note.findById(req.params.id)
  if (!noteFromDb) {
    return next(new ErrorHandler("Note not found", 404))
  }
  //   const noteFromBody = {
  //     ...(req.body.title && { title: req.body.title }),
  //     ...(req.body.note && { note: req.body.note }),
  //     ...(req.body.isPinned && { isPinned: req.body.isPinned }),
  //     ...(req.body.color && { color: req.body.color }),
  //     ...(req.body.label && { label: req.body.label }),
  //   }
  console.log(noteFromBody, "noteFromBody")
  const note = Object.assign(noteFromDb, noteFromBody)
  const updatedNote = await note.save()
  res.status(200).json({
    success: true,
    note: updatedNote,
  })
})

module.exports = { addNote, getAllNotes, deleteNote, updateNote }
