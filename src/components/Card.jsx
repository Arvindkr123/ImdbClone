import React from 'react'

const Card = () => {
    return (
        <div className={`bg-[url(https://images.alphacoders.com/119/thumbbig-1193007.webp)] h-[20vh] md:h-[30vh] w-[200px] md:w-[250px]  bg-cover bg-center rounded-xl flex items-end m-5 hover:scale-110 duration-300`}>
            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl text-sm md:text-xl'>Title</div>
        </div>
    )
}

export default Card
