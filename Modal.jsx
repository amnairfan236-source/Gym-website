import React from 'react';
import './Modal.css';

const Modal = ({ selectedPlan, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Join FIT PULSE</h3>
        <p>Selected Plan: <strong>{selectedPlan}</strong></p>
        
        <form onSubmit={(e) => { e.preventDefault(); alert("Registration successful!"); onClose(); }} className="modal-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Mobile Number" required />
          
          <button type="submit" className="submit-admission-btn">Submit Admission</button>
          <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;