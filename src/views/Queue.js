import React from 'react';
import '../styles/circle.css';
const Queue = () => {
  return (
    <div>
      <div className="circle-container">
        <h2>Queue Title</h2>
        <div class="bar">
          <svg>
            <circle cx="50%" cy="50%" r="50%"></circle>
          </svg>
          <h1>9</h1>
        </div>
        <p>estimated Time: x minutes</p>
      </div>
    </div>
  );
};

export default Queue;
