import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '', email: '', age: '', course: '', gender: '', skills: [], address: ''
  });

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    let updatedSkills = [...formData.skills];
    if (checked) updatedSkills.push(value);
    else updatedSkills = updatedSkills.filter(skill => skill !== value);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Submitted:", formData);
    navigate('/success'); // Redirects to success page
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
      <h2>Admission Form</h2>
      <input type="text" placeholder="Student Name" required onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
      <input type="email" placeholder="Email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type="number" placeholder="Age" onChange={(e) => setFormData({...formData, age: e.target.value})} />
      
      <select onChange={(e) => setFormData({...formData, course: e.target.value})}>
        <option value="">Select Course</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Mechanical">Mechanical</option>
        <option value="Arts">Arts</option>
      </select>

      <div>
        <label>Gender: </label>
        <input type="radio" name="gender" value="Male" onChange={(e) => setFormData({...formData, gender: e.target.value})} /> Male
        <input type="radio" name="gender" value="Female" onChange={(e) => setFormData({...formData, gender: e.target.value})} /> Female
      </div>

      <div>
        <label>Skills: </label>
        <input type="checkbox" value="Java" onChange={handleSkillsChange} /> Java
        <input type="checkbox" value="Python" onChange={handleSkillsChange} /> Python
        <input type="checkbox" value="React" onChange={handleSkillsChange} /> React
      </div>

      <textarea placeholder="Address" onChange={(e) => setFormData({...formData, address: e.target.value})} />
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Submit</button>
    </form>
  );
};

export default Registration;
