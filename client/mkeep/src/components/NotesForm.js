import React, { useState } from "react"
import { CirclePicker } from "react-color"
import { MdOutlineColorLens, MdNewLabel } from "react-icons/md"
import { BsFillPinAngleFill, BsPinAngle } from "react-icons/bs"
import { FaRegWindowClose } from "react-icons/fa"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { addNote, updateNote } from "features/notes/notesSlice"
import { addLabelPressed } from "features/user/userSlice"
import { toast } from "react-toastify"
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
  const [labelState, setLabel] = useState("")
  const [notesBody, setNotesBody] = useState(noteToEdit || initialState)
  const { labels, token } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setNotesBody({ ...notesBody, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editMode) {
      toast("🦄 Updating Note!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      dispatch(updateNote({ notesBody, token }))
      setEditMode(false)
    }
    if (!editMode) {
      toast("🦄 Adding Note!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      dispatch(addNote({ notesBody, token }))
      setNotesBody(initialState)
    }
  }

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
            className="w-full mb-2 p-2 bg-slate-50  outline-none px-4 h-full py-2 text-lg"
            value={notesBody.title}
            onChange={handleChange}
            name="title"
            autoFocus={true}
          />

          {notesBody.isPinned ? (
            <BsFillPinAngleFill
              size={"2.5em"}
              className="ml-5  mb-2 p-2 cursor-pointer"
              onClick={() => {
                toast("🦄 Pin Toggled!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })
                setNotesBody({ ...notesBody, isPinned: !notesBody.isPinned })
              }}
            />
          ) : (
            <BsPinAngle
              size={"2.5em"}
              className="ml-5  mb-2 p-2 cursor-pointer"
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
            className="border-0 p-1 mr-1 cursor-pointer"
            onChange={handleChange}
            value={notesBody.label}
          >
            <option>Select Tag</option>
            {labels.map((label, index) => (
              <option key={index}>{label}</option>
            ))}
          </select>

          {showColor ? (
            <CirclePicker
              onChange={(updatedColor) => {
                setNotesBody({ ...notesBody, color: updatedColor.hex })
                setShowColor(false)
              }}
              name="color"
              value={notesBody.color}
              className="p-3 cursor-pointer"
            />
          ) : (
            <MdOutlineColorLens
              onClick={() => setShowColor((prev) => !prev)}
              size={"2rem"}
              className="mr-1 cursor-pointer"
            />
          )}

          {showAddLabel ? (
            <div className="flex">
              <input
                type="text"
                placeholder="Add New Label"
                value={labelState}
                onChange={(e) => setLabel(e.target.value)}
              />
              <AiOutlineCloseCircle
                size={"2rem"}
                className="ml-2 mr-2 cursor-pointer"
                onClick={() => setAddLabel((prev) => !prev)}
              />
              <button
                className="py-1 px-2 bg-slate-200"
                onClick={() => {
                  const label = { label: labelState }
                  toast("🦄Adding Label!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
                  dispatch(addLabelPressed({ label, token }))
                  setAddLabel(false)
                  setLabel("")
                }}
              >
                Add
              </button>
            </div>
          ) : (
            <MdNewLabel
              size={"2rem"}
              onClick={() => setAddLabel((prev) => !prev)}
            />
          )}
          <input
            type="submit"
            value={editMode ? "Update" : "Create"}
            className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer"
          />

          <FaRegWindowClose
            size={"2rem"}
            className=" cursor-pointer"
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
