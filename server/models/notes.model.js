const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    isPinned: {
      type: Boolean,
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    label: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
const Note = mongoose.model("Note", NoteSchema)
module.exports = { Note }
