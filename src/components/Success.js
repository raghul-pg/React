import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', border: '2px solid green', borderRadius: '10px' }}>
      <h1 style={{ color: 'green' }}>Registration Successful!</h1>
      <p>Thank you for applying. Our admissions team will contact you soon.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Return to Home</Link>
    </div>
  );
};

export default Success;
