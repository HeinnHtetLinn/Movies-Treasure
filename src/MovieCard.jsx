import React from 'react'
export const MovieCard = ({movie}) => {
  return (
        <>
        {/* card base */}
        <div className='lg:w-full w-full lg:px-3'>
          <div className='bg-gray-200 text-white relative rounded-xl'>
            <span className='absolute top-0 left-0 p-6 font-bold text-sky-500'>{movie.Year}</span>
            <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl'></div>
            <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'} className="object-cover rounded-xl h-96 w-full " alt={movie.Title} />
            <div className='absolute bottom-0 left-0 z-20 p-6'>
              <h3 className='uppercase text-lg font-bold'>{movie.Type}</h3>
              <h2 className='text-xl mb-2'>{movie.Title}</h2>
            </div>
            
          </div>
        </div>
        </>
          
      

  )
}
