const referrenceValidator = require("mongoose-referrence-validator")

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NoteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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

NoteSchema.plugin(referrenceValidator)

const Note = mongoose.model("Note", NoteSchema)
module.exports = { Note }
