import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Inpatient = () => {
 const [formData, setFormData] = useState({
    patientId: '',
    name: '',
    age: '',
    gender: '',
    department: 'Dietetics',
 });
 const [submissionStatus, setSubmissionStatus] = useState('');

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Simulate form submission logic
    setSubmissionStatus('success');
 };

 return (
    <div>
      <h1>Inpatient Services</h1>
      <p>Welcome to the Inpatient Services section. Here, you can find information about our inpatient facilities, services, and booking procedures.</p>
      <Link to="/inpatient/booking">Book an Inpatient Stay</Link>

      {/* Appointment Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ width: '200px', textAlign: 'center' }}>
          Patient ID:
          <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }} />
        </label>
        <label style={{ width: '200px', textAlign: 'center' }}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }} />
        </label>
        <label style={{ width: '200px', textAlign: 'center' }}>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }} />
        </label>
        <label style={{ width: '200px', textAlign: 'center' }}>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label style={{ width: '200px', textAlign: 'center' }}>
          Preferred Department:
          <select name="department" value={formData.department} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }}>
            <option value="Dietetics">Dietetics</option>
            <option value="Nutrition">Nutrition</option>
          </select>
        </label>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>

      {submissionStatus === 'success' && <p>Submitted Successfully</p>}
    </div>
 );
};

export default Inpatient;