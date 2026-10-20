import React from 'react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>BUILD YOUR <span>ULTIMATE</span> BODY</h1>
        <p>Transform your fitness journey with high-performance workouts, expert trainers, and personalized training plans.</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => onOpenModal("Basic Plan")}>Get Started</button>
          <a href="#classes" className="btn-secondary">View Classes</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;