import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    try {
      const response = await axios.post('http://localhost:5000/api/average', { numbers: numArray });
      setAverage(response.data.average);
      setError('');
    } catch (err) {
      setError(err.response.data.error);
      setAverage(null);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="Enter numbers separated by commas"
        />
        <button type="submit">Calculate Average</button>
      </form>
      {average !== null && <h2>Average: {average}</h2>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default App;
