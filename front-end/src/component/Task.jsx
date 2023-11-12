import { useState } from 'react'
import {API} from '../config'
import axios from 'axios'

export default function Task({todo, setEdit}){
    
    const [desc, setDesc] = useState(true);

    function descOn(){
        setDesc(!desc);
    }

    const deleteTask = (id) => {
        const apiToken = localStorage.getItem('apiToken');
        axios.get(`${API}/delete?id=${id}`, {
            headers: {
              'Authorization': `Bearer ${apiToken}`
            }
          },)
              .then(response => {
                console.log('sucessfully deleted');
                setEdit(true);
              })
              .catch(error => {
                console.error('delete failed', error);
              })
    }
    
    return (
        <div className="row mb-2">
            <div className="col-7">
                {todo.todolist}
                {
                    !desc ? (<p className='mt-4'>Description: {todo.description}</p>):''
                }
            </div>
            <div className="col">
                <button className="btn btn-dark mr-2" onClick={descOn}>Detail</button>
                <button className="btn btn-danger" onClick={() => deleteTask(todo._id)}>Delete</button>
            </div>
      </div>
    )
}