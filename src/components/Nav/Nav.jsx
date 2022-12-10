import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";

export default function Nav(props) {
    return (
    <div>
        <Link to="/Home">
            <div>Home</div>
        </Link>
        <Link to="/About">
            <div>Home</div>
        </Link>
        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>
        <Link to="/favorites">Favorites</Link>
    </div>
    )       
}