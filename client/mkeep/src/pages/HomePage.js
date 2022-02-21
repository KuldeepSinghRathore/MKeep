import React from "react"
import { NotesForm } from "../components/NotesForm"
import { NotesList } from "../features/notes/NotesList"
import { SideBar } from "../components/SideBar"
import { useSelector } from "react-redux"
import { Loader } from "components/Loader"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
export const HomePage = () => {
  const { notes, status } = useSelector((state) => state.notes)
  if (status === "pending" && notes.length === 0) {
    return <Loader />
  }
  return (
    <div>
      <ToastContainer />
      {/* <div
        className="grid  place-content-center place-items-center gap-4  max-w-6xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(380px,1fr))" }}
      > */}
      <div className="flex">
        <div className="md:flex-[0.2] md:max-w-[160px]">
          <SideBar />
        </div>
        <div className="w-[95%] mx-auto md:w-full md:flex-[0.8]">
          <div className="">
            <NotesForm />
          </div>
          <NotesList />
        </div>
      </div>
    </div>
  )
}
