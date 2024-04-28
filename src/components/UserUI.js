import React from 'react'

const UserUI = ({data}) => {
  return (
   <div className="flex flex-col justify-center ">
      <div
        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border-white bg-white mt-10">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img src={data.picture.large} alt="tailwind logo" className="rounded-xl " />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
           
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">{data.name.first} {data.name.last}</h3>
          <p className="md:text-lg text-gray-500 text-base">{data.gender}</p>
          <p className="text-xl font-black text-gray-800">{data.cell}</p>
        </div>
      </div>
    </div>
  )
}

export default UserUI