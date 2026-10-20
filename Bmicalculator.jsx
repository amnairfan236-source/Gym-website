import React, { useState } from 'react';
import './Bmicalculator.css';

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setBmiMessage("Underweight - Under healthy range");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiMessage("Normal Weight - Great job!");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiMessage("Overweight - Slightly above ideal");
    } else {
      setBmiMessage("Obese - Consider structured training");
    }
  };

  return (
    <section id="bmi" className="bmi-section">
      <h2>BMI <span>CALCULATOR</span></h2>
      <p className="bmi-desc">Calculate your Body Mass Index to find your target fitness level.</p>

      <form onSubmit={calculateBMI} className="bmi-form">
        <div className="bmi-input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 170"
            required
          />
        </div>
        <div className="bmi-input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 68"
            required
          />
        </div>
        <button type="submit" className="bmi-submit-btn">Calculate BMI</button>
      </form>

      {bmi && (
        <div className="bmi-result-box">
          <h3>Your BMI: <span>{bmi}</span></h3>
          <p>{bmiMessage}</p>
        </div>
      )}
    </section>
  );
};

export default BmiCalculator;