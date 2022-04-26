import React from "react";
import SendMessage from './SendMessage.js'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th>Subjects</th>
                    <th>Contact</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.surname}</td>                    
                        <td>{item.description}</td>
                        <td>{item.tags}</td>
                        <td>{item.subjects}</td>
                        <td><Link to="/SendMessage"><button> Send Message </button></Link></td>      
                        </tr>                
                ))}
            </tbody>
        </table>
    )
}

export default Table;