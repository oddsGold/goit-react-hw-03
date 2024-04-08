import React from "react";
import search from "./SearchBox.module.css"

const SearchBox = ({ handleSearch }) => {
    return(
        <div className={search["handleSearch"]}>
            <p>Find contacts by name</p>
            <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBox;