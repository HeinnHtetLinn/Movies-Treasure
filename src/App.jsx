import logo from './logo.svg';
import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import { MovieCard } from './MovieCard';

// e6f9b309

const API_URL = "http://www.omdbapi.com?apikey=e6f9b309";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovie();
  },[]);
  return (
    <div>
      <h1 className='font-bold text-2xl text-center text-sky-400/70 hover:text-sky-400 '>Movies Treasure</h1>
      <div className='sm:ml-48 md:ml-72 sm:mt-10 mt-3'>
        <div className='flex flex-start align-middle p-2'>
        <input className='sm:w-96 w-80 h-10 border rounded-full shadow-sm outline-none text-black text-gray hover:shadow-lg text-center' 
        placeholder='Search For Movie' 
        value={searchTerm} 
      onChange={(e)=>setSearchTerm(e.target.value)} />
      <button className='mx-2' onClick={()=>searchMovie(searchTerm)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      
      </div>

      
      </div>
      {movies?.length > 0 ? (
          <div className='container mx-auto p-5 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 my-16'>
            {movies.map((movie)=>(
            <MovieCard movie={movie} />
            ))}
          </div>

          
        ):( 
          <div className="container mx-auto">
              <h2 className='text-center'>No Movies Found</h2> 
          </div>
        
        )
      }
      
    </div>
    
  );
}

export default App;
