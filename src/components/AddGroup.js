import React from "react";
import {Groups} from './groups.js';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';

const AddGroup = () => {

    const [list, setList] = useState(Groups);
    const [group_name, setGroupName] = useState('');
    const [members, setMembers] = useState('');
    const [members_spec, setMembersSpec] = useState('');
    const [description, setDescription] = useState('');
    const [subjects, setSubjects] = useState('');

    function handleChangeName(e){
        setGroupName(e.target.value);
    }
    function handleChangeMembers(e){
        setMembers(e.target.value);
    }
    function handleChangeMembersSpec(e){
        setMembersSpec(e.target.value);
    }
    function handleChangeDescription(e){
        setDescription(e.target.value);
    }
    function handleChangeSubjects(e){
        setSubjects(e.target.value);
    }

    function addGroup(){
        const newList = list.concat({  id : uuidv4(),
        group_name : group_name,
        members : members ,
        members_spec : members_spec,
        description : description,        
        subjects : subjects,});

        setList(newList);

        setGroupName('');
        setMembers('');
        setMembersSpec('');
        setDescription('');
        setSubjects('');
        
        
        // Podobnie jak w AddRequest,niestety nie jestem pewien jak mogę dodać te nowe wpisy do mojego pliku zawierającego mock data (groups.js)
        //przez co nie wyświetlają się one potem w searcherze
        

        //Students = [...newList]

        //console.log(Students[Students.length - 1].id);
    }

    return (
        <div>
            <h1>Add Group</h1>
            <form>
                <ul>
                    <li>
                        <label> Group Name: </label>
                        <input type = "text" value={group_name} onChange={handleChangeName}/>
                    </li>
                    <li>
                        <label> Members : </label>
                        <input type = "text" value={members} onChange={handleChangeMembers}/>
                    </li>
                    <li>
                        <label> Members Spec: </label>
                        <input type = "text" value={members_spec} onChange={handleChangeMembersSpec}/>
                    </li>
                    <li>
                        <label> Description: </label>
                        <input type = "text" value={description} onChange={handleChangeDescription}/>
                    </li>
                    <li>
                        <label> Subjects : </label>
                        <input type = "text" value={subjects} onChange={handleChangeSubjects}/>
                    </li>                                   
                    <button onClick={addGroup}> Add Group </button>                    
                </ul>
            </form>       
        </div>
    )
}

export default AddGroup;