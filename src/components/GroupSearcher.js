import React from "react";
import { useState } from 'react';
import {Groups} from './groups.js';
import TableG from './TableG.js';

function GroupSearcher () {

    const [query, setQuery] = useState();

    const keys = ["members_spec","subjects","description"]

    const search = (data) => {
    return data.filter((item) => keys.some((key)=>item[key].toLowerCase().includes(query))
    );
    };
    
    return (
        <div>
            <h1> Group Searcher </h1>
            <input type="text" placeholder='Search...' className = "search" onChange={e=> setQuery(e.target.value)}/>
            <TableG data={search(Groups)}/>
        </div>
    )
}

export default GroupSearcher;