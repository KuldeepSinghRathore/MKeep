import React, { useEffect } from "react"
import { NoteCard } from "components/NoteCard"
import { useDispatch, useSelector } from "react-redux"
import { getAllNotes } from "./notesSlice"
import { resetStatus } from "features/user/userSlice"

export const NotesList = () => {
  const { notes } = useSelector((state) => state.notes)
  const { token, isLoggedIn, status } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(resetStatus())
    }
  }, [dispatch, isLoggedIn])
  useEffect(() => {
    if (status === "fulfilled") {
      dispatch(getAllNotes(token))
    }
  }, [dispatch, token, status])

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