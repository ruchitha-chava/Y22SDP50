import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DoctorConsultationDetails = ({
  
  patientId,
  patientName,
  probdepartment,
 
}) => {
  return (
    <Container maxWidth="md" style={{ marginTop: '4rem' }}>
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '4rem' }}>
        <Typography component="h1" variant="h5" style={{ marginBottom: '2rem' }}>
          Appointment Details
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
             
              
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell>{patientId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Patient Name</TableCell>
                <TableCell>{patientName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Preferred Department</TableCell>
                <TableCell>{probdepartment}</TableCell>
              </TableRow>
             
          
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default DoctorConsultationDetails;