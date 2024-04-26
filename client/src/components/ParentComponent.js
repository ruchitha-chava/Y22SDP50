// ParentComponent.js
import React from 'react';
import backgroundImage from './background.jpg'; // Adjust the path to your image

const ParentComponent = ({ children }) => {
 return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the container covers the full viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {children}
    </div>
 );
};

export default ParentComponent;