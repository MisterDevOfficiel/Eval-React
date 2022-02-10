import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <section>
      <h1>Compteur</h1>
      <h1>{value}</h1>
      <button onClick={() => setValue(value - 1)}>Diminuer</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setValue(value + 1)}>Augmenter</button>
    </section>
  );
};

export default Counter;
