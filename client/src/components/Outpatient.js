import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Outpatient = () => {
 const [formData, setFormData] = useState({
    patientName: '',
    appointmentDate: '',
    age: '',
    gender: '',
    mobileNumber: '',
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
      <h1>Outpatient Services</h1>
      <p>Welcome to the Outpatient Services section. Here, you can find information about our outpatient facilities, services, and appointment scheduling.</p>
      <Link to="/outpatient/appointment">Schedule an Outpatient Appointment</Link>

      {/* Appointment Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ width: '200px', textAlign: 'center' }}>
          Patient Name:
          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }} />
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
          Mobile Number:
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }} />
        </label>
        <label style={{ width: '200px', textAlign: 'center' }}>
          Preferred Appointment Date:
          <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required style={{ width: '100%', marginBottom: '10px' }} />
        </label>
        <button type="submit" style={{ marginTop: '10px' }}>Schedule Appointment</button>
      </form>

      {submissionStatus === 'success' && <p>Submitted Successfully</p>}
    </div>
 );
};

export default Outpatient;