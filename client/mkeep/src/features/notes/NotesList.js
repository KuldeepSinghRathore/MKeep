import React, { useEffect } from "react"
import { NoteCard } from "components/NoteCard"
import { useDispatch, useSelector } from "react-redux"
import { getAllNotes } from "./notesSlice"

export const NotesList = () => {
  const { notes, status } = useSelector((state) => state.notes)
  const { token } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token && status === "idle") {
      dispatch(getAllNotes(token))
    }
  }, [dispatch, status, token])

  return (
    <>
      <div className=" md:w-7xl md:mx-auto   p-5">
        <h2 className="font-bold w-[70vh] text-center text-xl ">Pinned</h2>
        <div className="  justify-center gap-3 flex flex-wrap mt-5">
          {notes
            .filter((note) => note.isPinned)
            .map((note) => (
              <div key={note._id}>
                <NoteCard noteObj={note} key={note._id} />
              </div>
            ))}
        </div>
      </div>
      <div className="md:w-7xl md:mx-auto p-5">
        <h2 className="font-bold w-[70vh] text-xl text-center">Others</h2>
        <div className="  justify-center gap-3 flex flex-wrap mt-5">
          {notes
            .filter((note) => !note.isPinned)
            .map((note) => (
              <div key={note._id}>
                <NoteCard noteObj={note} key={note._id} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
