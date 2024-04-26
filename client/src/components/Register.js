import React, { useState } from 'react';
import '../App.css'; // Correct the path based on your file structure

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validate first name
    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    // Validate last name
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = 'Invalid email address';
    }

    // Validate password
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]/.test(password)) {
      errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      errors.phone = 'Invalid phone number (10 digits)';
    }

    // Validate address
    if (!address.trim()) {
      errors.address = 'Address is required';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleRegister = () => {
    const isValid = validateForm();

    if (isValid) {
      // Add your registration logic here, e.g., API call, etc.
      setRegistrationSuccessful(true);
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="heading">Register for Health and Nutrition Consultancy</h2>
        {registrationSuccessful ? (
          <div className="success-message">
            Registration successful! Thank you for registering.
          </div>
        ) : (
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {validationErrors.firstName && (
                <div className="error-message">{validationErrors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {validationErrors.lastName && (
                <div className="error-message">{validationErrors.lastName}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {validationErrors.email && (
                <div className="error-message">{validationErrors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {validationErrors.password && (
                <div className="error-message">{validationErrors.password}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {validationErrors.confirmPassword && (
                <div className="error-message">{validationErrors.confirmPassword}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {validationErrors.phone && (
                <div className="error-message">{validationErrors.phone}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              {validationErrors.address && (
                <div className="error-message">{validationErrors.address}</div>
              )}
            </div>

            <button type="button" onClick={handleRegister} className="btn-register">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
