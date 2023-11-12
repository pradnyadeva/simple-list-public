import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Navbar({username}) {
  const navigate = useNavigate();

  function logout(){
    localStorage.removeItem('apiToken');
    navigate('/login');
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div className='container-fluid'>
          <a href="/" className='navbar-brand'>Simple List</a>

          <ul className='navbar-nav d-flex flex-row me-1'>
            <li className='nav-item me-3 me-lg-0'>
              <a className='nav-link text-white' href="">
                <i className='fas fa-user mx-1'></i>{username}
                </a>
            </li>
            <li className='nav-item me-3 me-lg-0'>
              <button className='btn btn-danger mx-1' onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
    </nav>
  )
}

