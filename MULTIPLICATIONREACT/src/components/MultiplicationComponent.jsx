import React, { useState, useEffect } from 'react';

const MultiplicationComponent = ({ initialValue }) => {
  // State for input values
  const [number1, setNumber1] = useState(initialValue);
  const [number2, setNumber2] = useState(initialValue);
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  // Calculate the product whenever input values change
  useEffect(() => {
    const result = number1 * number2;
    setProduct(result);

    if (result === initialValue) {
      setMessage(`La multiplication des deux nombres fait bien ${result}.`);
    } else {
      setMessage(`Les deux nombres multipliés ne font pas ${initialValue}...`);
    }
  }, [number1, number2, initialValue]);

  return (
    <div>
      <h1>Multiplication App</h1>
      <label>
        Number 1:
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Number 2:
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </label>
      <br />
      {product !== null && <p>{message}</p>}
    </div>
  );
};

export default MultiplicationComponent;
