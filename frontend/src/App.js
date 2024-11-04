import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!x || !y) {
      setError('Ambos os campos são obrigatórios.');
      return false;
    }
    if (isNaN(x) || isNaN(y)) {
      setError('Os valores devem ser números inteiros.');
      return false;
    }
    if (parseInt(x) <= 0 || parseInt(y) <= 0) {
      setError('Os números devem ser inteiros positivos.');
      return false;
    }
    if (parseInt(x) >= parseInt(y)) {
      setError('O valor de x deve ser menor que y.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await axios.get('http://localhost:8000/api/calculate/', {
        params: { x, y },
      });
      setResult(response.data.lcm);
    } catch (err) {
      setError(err.response.data.error || 'Erro ao calcular o MMC.');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de MMC</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Valor de x:</label>
          <input
            type="number"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
        </div>
        <div>
          <label>Valor de y:</label>
          <input
            type="number"
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {error && <p className="error">{error}</p>}
      {result !== null && (
        <p className="result">O MMC do intervalo é: {result}</p>
      )}
    </div>
  );
}

export default App;