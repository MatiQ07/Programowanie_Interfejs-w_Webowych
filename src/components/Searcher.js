import React from "react";
import { useState } from 'react';
import {Students} from './students.js';
import Table from './Table.js';

function Home () {

    const [query, setQuery] = useState();

    const keys = ["tags","subjects","description"]

    const search = (data) => {
    return data.filter((item) => keys.some((key)=>item[key].toLowerCase().includes(query))
    );
  };
    
    return (
        <div>
            <h1> Student Searcher </h1>
            <input type="text" placeholder='Search...' className = "search" onChange={e=> setQuery(e.target.value)}/>
            <Table data={search(Students)}/>
        </div>
    )
}

export default Home;