import {Groups} from '../src/components/groups.js';
import {Students} from '../src/components/students.js';
import express from 'express';
import fs from 'fs';

const app = express()

const Port = 3000

app.listen(Port, () => console.log("listening at port 3000"))

app.use(express.static('public'))

const saveData = (data,fileName) => {

    const finished = (error) =>{
        if(error){
            console.error(error)
            return;
        }
    }

    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile(fileName,jsonData,finished)
}

saveData(Groups,'groups.json')
saveData(Students,'students.json')