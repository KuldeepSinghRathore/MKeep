import React from "react"
import { NotesForm } from "../components/NotesForm"
import { NotesList } from "../components/NotesList"
import { SideBar } from "../components/SideBar"

export const HomePage = () => {
  return (
    <div>
      {/* <div
        className="grid  place-content-center place-items-center gap-4  max-w-6xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(380px,1fr))" }}
      > */}
      <div className="flex">
        <div className="flex-[0.2] max-w-[160px]">
          <SideBar />
        </div>
        <div className="flex-[0.8]">
          <div className="">
            <NotesForm />
          </div>
          <NotesList />
        </div>
      </div>
    </div>
  )
}
