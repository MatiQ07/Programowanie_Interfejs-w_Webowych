import React from "react";
import {Students} from './students.js';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';

const AddRequest = () => {

    const [list, setList] = useState(Students);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [subject, setSubject] = useState('');
    
    function handleChangeName(e){
        setName(e.target.value);
    }

    function handleChangeSurname(e){
        setSurname(e.target.value);
    }

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function handleChangeDescription(e){
        setDescription(e.target.value);
    }

    function handleChangeTags(e){
        setTags(e.target.value);
    }

    function handleChangeSubjects(e){
        setSubject(e.target.value);
    }
    

    function addStudent(){
        const newList = list.concat({ id : uuidv4(), first_name : name ,
            surname : surname ,
            email : email,
            description : description,
            tags : tags,
            subjects : subject});

        setList(newList);

        setName('');
        setSurname('');
        setEmail('');
        setDescription('');
        setTags('');
        setSubject('');

        console.log(newList[newList.length - 1])            //Sprawdzenie, czy nowy element dodaje się do listy elementów, niestety
        //nie jestem pewien jak mogę dodać te nowe wpisy do mojego pliku zawierającego mock data (students.js), przez co nie wyświetlają się w searcherze
        
        //Students = [...newList]

        //console.log(Students[Students.length - 1].id);
    }

    return (
        <div>
            <h1>Add Request</h1>
            <form>
                <ul>
                    <li>
                        <label> Name : </label>
                        <input type = "text" value={name} onChange={handleChangeName}/>
                    </li>
                    <li>
                        <label> Surname : </label>
                        <input type = "text" value={surname} onChange={handleChangeSurname}/>
                    </li>
                    <li>
                        <label> Email : </label>
                        <input type = "text" value={email} onChange={handleChangeEmail}/>
                    </li>
                    <li>
                        <label> Description: </label>
                        <input type = "text" value={description} onChange={handleChangeDescription}/>
                    </li>
                    <li>
                        <label> Tags : </label>
                        <input type = "text" value={tags} onChange={handleChangeTags}/>
                    </li>
                    <li>
                        <label> Subjects : </label>
                        <input type = "text" value={subject} onChange={handleChangeSubjects}/>
                    </li>                    
                    <button onClick={addStudent}> Add Student </button>                    
                </ul>
            </form>       
        </div>
    )
}

export default AddRequest;

/*

  let result = Students.map(el => {
            el.reply.push({"id" : 4,
            "first_name" : "Alan",
            "surname" : "Green" ,
            "email" : "abc",
            "description" : "I like butter",
            "tags" : "a b",
            "subjects" : "maths physics"});
            return el;
        });
        this.setState({Students : result})

*/