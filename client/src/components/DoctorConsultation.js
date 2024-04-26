import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import DoctorConsultationDetails from './DoctorConsultationDetails';

const DoctorConsulation = () => {
 
  const [patientId, setPatientId] = useState('');
  const [patientName, setPatientName] = useState('');
  const [probdepartment, setProbdepartment] = useState('');
 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here

    // Set a flag to indicate that the form has been submitted
    setFormSubmitted(true);
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Container maxWidth="md" style={{ marginTop: '4rem' }}>
      {formSubmitted ? (
        <DoctorConsultationDetails
          
          patientId={patientId}
          patientName={patientName}
          probdepartment={probdepartment}
         
        />
      ) : (
        <Paper elevation={3} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" style={{ marginBottom: '2rem' }}>
            Appointment Form
          </Typography>
          <form style={{ width: '100%', marginTop: '1.5rem' }} onSubmit={handleSubmit}>
           
           
            <TextField
              margin="normal"
              required
              fullWidth
              id="patientId"
              label="Patient ID"
              name="patientId"
              autoComplete="off"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="patientName"
              label="Patient Name"
              name="patientName"
              autoComplete="name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                id="probdepartment"
                value={probdepartment}
                label="Preferred department"
                onChange={(e) => setProbdepartment(e.target.value)}
              >
                <MenuItem value="Dietetics">Dietetics</MenuItem>
                <MenuItem value="Nutrition">Nutrition</MenuItem>
               
              </Select>
            </FormControl>
       
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: '2rem', marginBottom: '2rem' }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      )}
    </Container>
  );
};

export default DoctorConsulation;