import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { BsFillPinAngleFill, BsPinAngle } from "react-icons/bs"
import { RiDeleteBin2Fill } from "react-icons/ri"
import { deleteNote, updateNote } from "features/notes/notesSlice"
import { useDispatch, useSelector } from "react-redux"
import { NotesForm } from "./NotesForm"
import { toast } from "react-toastify"

export const NoteCard = ({ noteObj }) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const { token } = useSelector((state) => state.users)
  return editMode ? (
    <div className="   ">
      <NotesForm
        noteToEdit={noteObj}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </div>
  ) : (
    <div
      className="flex flex-col  min-w-[20rem] mx-auto md:max-w-[20rem] md:min-w-[20rem] border-solid border-2 rounded-tl-lg rounded-br-lg    m-2 shadow-md  p-5 gap-3"
      style={{ background: noteObj.color }}
    >
      <div className="flex justify-between">
        <p
          className={`${
            noteObj.label && "bg-gray-200 py-1 px-2 font-semibold"
          }`}
        >
          {noteObj.label}
        </p>

        {noteObj.isPinned ? (
          <BsFillPinAngleFill
            size={"1.5em"}
            className="cursor-pointer"
            onClick={() => {
              toast("🦄 Unpinning...!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              const notesBody = {
                _id: noteObj._id,
                isPinned: !noteObj.isPinned,
              }
              dispatch(updateNote({ notesBody, token }))
            }}
          />
        ) : (
          <BsPinAngle
            size={"1.5em"}
            className="cursor-pointer"
            onClick={() => {
              toast("🦄 Pinning...!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              const notesBody = {
                _id: noteObj._id,
                isPinned: !noteObj.isPinned,
              }
              dispatch(updateNote({ notesBody, token }))
            }}
          />
        )}
      </div>
      <div className="text-center flex flex-col md:max-h-[10rem] md:min-h-[10rem] ">
        <h2 className="uppercase font-semibold">{noteObj.title}</h2>
        <p className=" text-left overflow-y-auto">{noteObj.note}</p>
      </div>
      <div className="flex justify-between">
        <span>
          <FiEdit
            size={"1.5em"}
            className="cursor-pointer"
            onClick={() => setEditMode(true)}
          />
        </span>

        <RiDeleteBin2Fill
          size={"1.5em"}
          className="cursor-pointer"
          onClick={() => {
            toast("🦄 Deleting...!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            const notesBody = {
              _id: noteObj._id,
            }
            dispatch(deleteNote({ notesBody, token }))
          }}
        />
      </div>
    </div>
  )
}
