import React, { useEffect, useState } from "react"
import { CirclePicker } from "react-color"
import { MdOutlineColorLens, MdNewLabel } from "react-icons/md"
import { BsFillPinAngleFill, BsPinAngle } from "react-icons/bs"
import { FaRegWindowClose } from "react-icons/fa"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { addNote, updateNote } from "features/notes/notesSlice"
const initialState = {
  title: "",
  note: "",
  isPinned: false,
  color: "#fff",
  label: "",
}

export const NotesForm = ({ editMode, noteToEdit, setEditMode }) => {
  const [showColor, setShowColor] = useState(false)
  const [showAddLabel, setAddLabel] = useState(false)
  const [notesBody, setNotesBody] = useState(noteToEdit || initialState)
  const { status } = useSelector((state) => state.notes)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setNotesBody({ ...notesBody, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editMode) {
      dispatch(updateNote(notesBody))
      setEditMode(false)
    }
    if (!editMode) {
      dispatch(addNote(notesBody))
      setNotesBody(initialState)
    }
  }
  // bg-[${color}]
  console.log(status, "status here")

  return (
    <div
      className={` ${
        editMode
          ? "w-full md:w-full md:max-w-[80%]  border-solid border-2 rounded-t-lg   shadow-2xl  "
          : "w-3/4 ml-6 md:mx-auto mt-5 max-w-3xl border-solid border-2 rounded-t-lg   shadow-2xl"
      }`}
      style={{ background: notesBody.color }}
    >
      <form className=" flex flex-col w-100 p-3 " onSubmit={handleSubmit}>
        <div className="flex justify-between flex-wrap-reverse sm:flex-nowrap">
          <input
            type="text"
            placeholder="Title"
            className="w-full mb-2 p-2 outline-none px-4 h-full py-2 text-lg"
            value={notesBody.title}
            onChange={handleChange}
            name="title"
          />

          {notesBody.isPinned ? (
            <BsFillPinAngleFill
              size={"2.5em"}
              className="ml-5  mb-2 p-2"
              onClick={() =>
                setNotesBody({ ...notesBody, isPinned: !notesBody.isPinned })
              }
            />
          ) : (
            <BsPinAngle
              size={"2.5em"}
              className="ml-5  mb-2 p-2"
              onClick={() =>
                setNotesBody({ ...notesBody, isPinned: !notesBody.isPinned })
              }
            />
          )}
        </div>
        <div>
          <textarea
            placeholder="Notes...."
            className={`w-full mb-2 p-2  min-h-[200px] bg-slate-100 rounded-md outline-none px-4  py-2 text-lg`}
            value={notesBody.note}
            onChange={handleChange}
            name="note"
          />
        </div>
        <div className="flex gap:5 mr-4 gap-y-7 md:gap-10 justify-between items-center flex-wrap ">
          <select
            name="label"
            id=""
            className="border-0 p-1 mr-1"
            onChange={handleChange}
            value={notesBody.label}
          >
            <option>Select Tag</option>
            <option>work</option>
            <option>todo</option>
            <option>study</option>
          </select>

          {showColor ? (
            <CirclePicker
              onChange={(updatedColor) => {
                setNotesBody({ ...notesBody, color: updatedColor.hex })
                setShowColor(false)
              }}
              name="color"
              value={notesBody.color}
              className="p-3 "
            />
          ) : (
            <MdOutlineColorLens
              onClick={() => setShowColor((prev) => !prev)}
              size={"2rem"}
              className="mr-1"
            />
          )}

          {showAddLabel ? (
            <div className="flex">
              <input type="text" placeholder="Add New Label" />
              <AiOutlineCloseCircle
                size={"2rem"}
                className="ml-2 mr-2"
                onClick={() => setAddLabel((prev) => !prev)}
              />
              <button className="py-1 px-2 bg-slate-200">Add</button>
            </div>
          ) : (
            <MdNewLabel
              size={"2rem"}
              onClick={() => setAddLabel((prev) => !prev)}
            />
          )}
          <input
            type="submit"
            value={editMode ? "Update" : "Save"}
            className="px-3 py-1 bg-gray-200 rounded-md"
          />
          {/* <button className="px-4 py-2 bg-gray-200 rounded-md">close</button>
           */}
          <FaRegWindowClose
            size={"2rem"}
            onClick={() => {
              setNotesBody(initialState)
              setShowColor(false)
              setEditMode(false)
            }}
          />
        </div>
      </form>
    </div>
  )
}
