import { useState, useEffect } from 'react'
import axios from 'axios'
import {API} from '../config'
import '../App.css'
import { useNavigate } from "react-router-dom";

function Login() { 
    const navigate = useNavigate();
    const [logon, setLogon] = useState({
      email:"",
      password:""
    });

    function logonChange(e){
      setLogon({
          ...logon, [e.target.name]:e.target.value
        });
    }

    async function submitLogin(){
      axios.post(`${API}/login`, logon)
        .then(response => {
          console.log('Logged in successfully!', response.data);
          localStorage.setItem('apiToken', response.data.token);
          navigate("/");
        })
        .catch(error => {
          console.error('login failed', error);
          throw error;
        })
    }

    useEffect(() => {
      const apiToken = localStorage.getItem('apiToken');
      async function getverify(){
        if(apiToken){
        axios.get(`${API}/apitest`, {
          headers: {
            'Authorization': `Bearer ${apiToken}`
          }
        })
            .then(response => {
                navigate("/");
                console.log('nice');
            })
            .catch(error => {
              localStorage.removeItem('apiToken');
            });
          }
      }

      
      getverify();
      console.log('run');
      
      
    }, []);

  return (
    <section className="gradient-custom d-flex justify-content-center align-items-center">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card bg-white text-black"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-black-50 mb-5">
                  Please enter your login and password!
                </p>
                <div className="form-outline form-white mb-4">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    onChange={logonChange}
                  />
                  <label className="form-label" htmlFor="typeEmailX">
                    Email
                  </label>
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    name='password'
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-lg"
                    onChange={logonChange}
                  />
                  <label className="form-label" htmlFor="typePasswordX">
                    Password
                  </label>
                </div>
                <button
                  className="btn btn-dark btn-lg px-5"
                  type="submit"
                  onClick={submitLogin}
                >
                  Login
                </button>
              </div>
              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-black-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default Login
