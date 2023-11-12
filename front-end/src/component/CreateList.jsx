import { useState } from 'react';
import axios from 'axios';
import {API} from '../config';

export default function CreateList({setEdit}) {
  const apiToken = localStorage.getItem('apiToken');
  const [formData, setFormData] = useState({
    todolist: '',
    description: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data to the server using Axios
    axios.post(`${API}/crlist`, formData, {
      headers: {
        'Authorization': `Bearer ${apiToken}`
      }})
      .then(response => {
        // Handle success, e.g., show a success message or redirect
        console.log('Form data submitted successfully:', response.data);
        setEdit(true);
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Form submission failed:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className='w-100' onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="task" className="col-3 col-form-label">
          Task
        </label>
        <div className="col-8">
          <input
            id="todolist"
            name="todolist"
            type="text"
            className="form-control"
            required
            value={formData.todolist}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="description" className="col-3 col-form-label">
          Description
        </label>
        <div className="col-8">
          <input
            id="description"
            name="description"
            type="text"
            className="form-control"
            required
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-3 col-8">
          <button name="submit" type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}