import React from "react"
import { NoteCard } from "./NoteCard"

export const NotesList = () => {
  return (
    <>
      <div className="w-7xl mx-auto p-5">
        <h2 className="font-bold w-[70vh] text-center text-xl ">Pinned</h2>
        <div className="  justify-center  flex flex-wrap mt-5">
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
        </div>
      </div>
      <div className="w-7xl mx-auto p-5">
        <h2 className="font-bold w-[70vh] text-xl text-center">Others</h2>
        <div className="  justify-center  flex flex-wrap mt-5">
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
          <div className=" m-1   text-center  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <NoteCard />
          </div>
        </div>
      </div>
    </>
  )
}
