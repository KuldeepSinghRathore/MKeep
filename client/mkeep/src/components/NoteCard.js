import React from "react"
import { FiEdit } from "react-icons/fi"
import { BsPinAngle } from "react-icons/bs"
import { RiDeleteBin2Fill } from "react-icons/ri"
export const NoteCard = () => {
  return (
    <div className="flex flex-col  min-w-72 border-solid border-2 rounded-tl-lg rounded-br-lg   mx-auto m-2 shadow-md max-w-fit p-5 gap-3">
      <div className="flex justify-between">
        <p className=" bg-gray-200 py-1 px-2 font-semibold">LABEL</p>

        <BsPinAngle size={"1.5em"} />
      </div>
      <div className="text-center flex flex-col ">
        <h2 className="uppercase font-semibold">Title</h2>
        <p className=" text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque
          amet sunt fuga dolor recusandae laudantium sequi sint delectus,
          mollitia praesentium earum dolorem modi dicta sit tempore eveniet
          optio. Sunt.
        </p>
      </div>
      <div className="flex justify-between">
        <span>
          <FiEdit size={"1.5em"} />
        </span>
        <RiDeleteBin2Fill size={"1.5em"} />
      </div>
    </div>
  )
}
