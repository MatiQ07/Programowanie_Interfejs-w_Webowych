import React from "react";

const TableG = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Group Name</th>
                    <th>Members</th>
                    <th>Member spec</th>
                    <th>Description</th>
                    <th>Subjects</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.group_name}</td>
                        <td>{item.members}</td>                    
                        <td>{item.members_spec}</td>
                        <td>{item.description}</td>
                        <td>{item.subjects}</td>
                    </tr>                
                ))}
            </tbody>
        </table>
    )
}

export default TableG;