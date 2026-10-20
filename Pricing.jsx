import React from 'react';
import './Pricing.css';

const Pricing = ({ onOpenModal }) => {
  return (
    <section id="plans" className="pricing-section">
      <h2>MEMBERSHIP <span>PLANS</span></h2>
      
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p className="price">Rs. 3,500 <span>/ month</span></p>
          <ul>
            <li>✔ Gym Floor Access</li>
            <li>✔ Locker Room Access</li>
            <li>✔ Free Water Station</li>
          </ul>
          <button onClick={() => onOpenModal("Basic Plan")}>Choose Plan</button>
        </div>

        <div className="pricing-card featured">
          <h3>Pro Plan</h3>
          <p className="price">Rs. 6,000 <span>/ month</span></p>
          <ul>
            <li>✔ All Basic Features</li>
            <li>✔ Group Fitness Classes</li>
            <li>✔ 1 Personal Training Session</li>
          </ul>
          <button onClick={() => onOpenModal("Pro Plan")}>Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;