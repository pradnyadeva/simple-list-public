import { useState, useEffect } from 'react'
import {API} from './config'
import axios from 'axios'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Task from './component/Task'
import CreateList from './component/CreateList'
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const [username, setUser] = useState('');
  const [edit, setEdit] = useState(false);
  

  useEffect(() => {
    const apiToken = localStorage.getItem('apiToken');
    async function getlist(){
      axios.get(`${API}/getlist`, {
        headers: {
          'Authorization': `Bearer ${apiToken}`
        }
      })
          .then(response => {
            if(response.status === 201){
                setTodos(response.data.todos);
                setUser(response.data.username);
                console.log(todos);
                setLoading(false);
                setEdit(false)
            } 
          })
          .catch(error => {
            console.error('failed', error);
            navigate('/login');
          })
    }

    getlist();

    
  },[edit])

  if (loading) {
    return (
      <div className="loading-container">
        <div className='d-flex flex-column'>
          <div className="ml-3">
            <ReactLoading type="spin" color="black"/>;
          </div>
          
          <h3>Loading</h3>
        </div>
      </div>
      

    )
  }
  return (
    <div className='gradient-custom'>
      <Navbar
      username={username}
      />
      <section className='mt-5 d-flex justify-content-center align-items-center'>
        <div className="content">
          <div className="container">
            <div className="text-center">
              <h2 className='mt-3'>Todo List:</h2>
            </div>
            <div className="container mt-3">
              <div className="custom-row">
              {todos === undefined || todos.length === 0 ? (<p></p>) : (
                todos.map((todo) => ( 
                  <Task todo={todo} setEdit={setEdit} />
                ))
              ) }
              </div>
              <div className="row mb-2 mt-5">
                  <CreateList setEdit={setEdit}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  )
}

export default App
