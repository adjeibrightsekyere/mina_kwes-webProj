import React from 'react';

function SearchResults({result}){
    return(
        <div className='p-2 hover:bg-slate-400' onClick = {(e) => alert(`You just clicked on ${result.name}`)}>
            {result.name}
        </div>
    )
}
export default SearchResults;
