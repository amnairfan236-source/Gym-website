import React, { useState } from 'react';
import './Classes.css';

const classesData = [
  { id: 1, name: "High-Intensity Cardio", category: "Cardio", time: "Mon, Wed, Fri - 8:00 AM", instructor: "Sarah Khan" },
  { id: 2, name: "Heavy Weight Powerlifting", category: "Strength", time: "Tue, Thu, Sat - 5:00 PM", instructor: "Zubair Ahmed" },
  { id: 3, name: "Power Yoga & Flexibility", category: "Yoga", time: "Mon, Wed, Sat - 7:00 AM", instructor: "Ayesha Malik" },
  { id: 4, name: "Core & Abs Conditioning", category: "Cardio", time: "Everyday - 6:00 PM", instructor: "Hamza Ali" },
];

const Classes = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredClasses = activeFilter === "All"
    ? classesData
    : classesData.filter((c) => c.category === activeFilter);

  return (
    <section id="classes" className="classes-section">
      <h2>FITNESS <span>CLASSES</span></h2>
      
      <div className="filter-buttons">
        {["All", "Cardio", "Strength", "Yoga"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={activeFilter === cat ? "filter-btn active" : "filter-btn"}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="classes-grid">
        {filteredClasses.map((item) => (
          <div key={item.id} className="class-card">
            <h3>{item.name}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Timing:</strong> {item.time}</p>
            <p><strong>Trainer:</strong> {item.instructor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;