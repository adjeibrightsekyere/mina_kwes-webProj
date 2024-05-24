import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

function Search({setResults}) {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    )
                })
                setResults(results);
            })
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
    return (
        <div>
            <div className='flex bg-white h-full w-full p-2 items-center  rounded-full'>
                <FaSearch className='ml-2' />
                <input
                    className='bg-transparent border-none h-full w-full pl-2 focus:outline-none'
                    placeholder='Type to search'
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    )
}
export default Search;