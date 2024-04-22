import React, { useState } from 'react';

function Search({onSearch}){
    const [search, setSearch] = useState('');
    
    const handleInputChange = (event) => {
        setSearch(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(search)
    };

    return(
        <div>
            <form onSubmit={handleSubmit} 
            className='flex  text-xl text-black rounded-full border border-blue-500 shadow-sm shadow-white bg-lime-600'>
                <input 
                    type='text'
                    placeholder='search..'
                    value={search}
                    onChange={handleInputChange}
                    className='flex text-center bg-lime-600'
                />

                <button 
                    className=''
                    type='submit'>
                    <img 
                    className='w-4 ml-2 pr-1'
                    src='https://www.svgrepo.com/show/7109/search.svg' alt='' />
                </button>
            </form>
        </div>
    )
}

export default Search;