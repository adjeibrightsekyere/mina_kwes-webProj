import React from "react";
import SearchResults from "./searchResults";

function SearchResultsList({results}) {
    return(
        <div className="flex flex-col bg-white w-full mt-2 rounded-lg shadow-2xl z-40 max-h-72 overflow-y-scroll">
            {results.map((result, id) => {
                return <SearchResults result={result} />
            })
            
            }
           
            
        </div>
    )
}
export default SearchResultsList;