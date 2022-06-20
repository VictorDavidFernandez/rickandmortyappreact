import React from "react";
import './Search.css';

const Search = ({search}) => {
    return (
        <div className="searchName">
            <input onChange={e=>{search(e.target.value)}}type="text" 
            className="searchNameInput" placeholder="Search name"/>
        </div>
    )
}

export default Search