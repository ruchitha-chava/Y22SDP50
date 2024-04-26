import React from 'react';
import { Link } from 'react-router-dom';
import exerciseImage from './exercise.png'; // Import exercise image
import dietImage from './diet.jpeg'; // Import diet image
import healthTipsImage from './healthtips.jpeg'; // Import health tips image

const HomeCareComponent = () => {
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: '#333',
    textAlign: 'center',
    backgroundColor: 'white', // White background
  };

  const lavenderBackground = {
    background: '#E6E6FA',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Home Care</h2>
      <br />
      {/* Introduction to the importance of home care */}
     
    
      <br />
      {/* Cards with links to separate pages */}
      <div style={cardContainerStyle}>
        <Link to="/exercise" style={{ ...cardStyle }}>
          <img src={exerciseImage} alt="Exercise" style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
          <h3>Exercise</h3>
          <h6>Click here</h6>
        </Link>

        <Link to="/healthyrecipies" style={{ ...cardStyle }}>
          <img src={dietImage} alt="Healthy Recipies" style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
          <h3>Healthy Recipies</h3>
          <h6>Click here</h6>
        </Link>

        <Link to="/healthtips" style={{ ...cardStyle }}>
          <img src={healthTipsImage} alt="Health Tips" style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
          <h3>Health Tips</h3>
          <h6>Click here</h6>
        </Link>
      </div>
    </div>
  );
};

export default HomeCareComponent;