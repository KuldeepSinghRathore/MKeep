import React, { useState } from "react"
import { CirclePicker } from "react-color"
import { MdOutlineColorLens, MdNewLabel } from "react-icons/md"
import { BsPinAngle } from "react-icons/bs"
import { FaRegWindowClose } from "react-icons/fa"
// const initialState = {
//   _id: "",
//   title: "",
//   note: "",
//   isPinned: false,
//   color: "#fff",
//   label: "",
// }

export const NotesForm = () => {
  const [color, setColor] = useState("#ffffff")
  const [showColor, setShowColor] = useState(false)
  const [showAddLabel, setAddLabel] = useState(false)
  // const [notesBody, setNotesBody] = useState(initialState)
  // const handleChange = (e) => {
  //   setNotesBody({ ...notesBody, [e.target.name]: e.target.value })
  // }
  // bg-[${color}]
  console.log({ color }, "color")
  return (
    <div
      className={` w-3/4 mx-auto mt-5 max-w-3xl border-solid border-2 rounded-t-lg   shadow-2xl`}
      style={{ background: color }}
    >
      <form className=" flex flex-col w-full p-3 ">
        <div className="flex justify-between flex-wrap-reverse sm:flex-nowrap">
          <input type="text" placeholder="Title" className="w-full mb-2 p-2" />

          <BsPinAngle size={"2.5em"} className="ml-5  mb-2 p-2" />
        </div>
        <div>
          <textarea
            placeholder="Notes...."
            className="w-full mb-2 p-2 resize-none rounded-md"
          />
        </div>
        <div className="flex gap:5 gap-y-7 md:gap-10 justify-between items-center flex-wrap ">
          <select name="" id="" className="border-0 p-1 mr-1">
            <option>Select Tag</option>
            <option>work1</option>
            <option>work2</option>
          </select>

          {showColor ? (
            <CirclePicker
              onChange={(updatedColor) => {
                setColor((prev) => (prev = updatedColor.hex))
                setShowColor(false)
              }}
              name="color"
              value={color}
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
            value="submit"
            className="px-3 py-1 bg-gray-200 rounded-md"
          />
          {/* <button className="px-4 py-2 bg-gray-200 rounded-md">close</button>
           */}
          <FaRegWindowClose size={"2rem"} />
        </div>
      </form>
    </div>
  )
}
