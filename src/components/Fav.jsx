import React, { useState } from 'react'
import Pagination from './Pagination'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'

const Fav = () => {
  const [curGen, setCurGen] = useState('XYZ');
  return (
    <>
      <div className='flex justify-center space-x-2 mt-4 px-2 flex-wrap'>
        <button className={curGen === 'All Genres' ? 'mt-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold' : 'mt-2 text-lg p-1 px-2  bg-gray-500 hover:bg-blue-400 text-white rounded-xl font-bold'}>All Genres</button>
        <button className={curGen === 'Actions' ? 'mt-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold' : 'mt-2 text-lg p-1 px-2  bg-gray-500 hover:bg-blue-400 text-white rounded-xl font-bold'}>Actions</button>
      </div>
      <div className='flex justify-center'>
        <input type='text' placeholder='search' className='border-2 text-xl p-1 m-2 text-center' />
        <input type='number' placeholder='rows' className='border-2 text-xl p-1 m-2 text-center' />
      </div>
      <div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900 ">
                  <FiArrowUpCircle /><p>Rating</p><FiArrowDownCircle />
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  <FiArrowUpCircle /><p>Popluarity</p><FiArrowDownCircle />
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Genre</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-4'><Pagination /></div>
    </>
  )
}

export default Fav
