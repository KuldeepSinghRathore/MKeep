import React, { useEffect } from "react"
import { NoteCard } from "components/NoteCard"
import { useDispatch, useSelector } from "react-redux"
import { getAllNotes } from "./notesSlice"

export const NotesList = () => {
  const { status, notes } = useSelector((state) => state.notes)
  const dispatch = useDispatch()
  console.log(status, "status", notes, "notes")
  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllNotes())
      console.log("notes fetched")
    }
  }, [status, dispatch])

  return (
    <>
      <div className="md:w-7xl md:mx-auto   p-5">
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
