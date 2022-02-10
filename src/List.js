import { useState } from 'react';

const List = () => {
  const [input, setInput] = useState('');
  const [inputs, setInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      const value = { id: new Date().getTime().toString(), input };
      setInputs((inputs) => {
        return [...inputs, value];
      });
      setInput('');
    }
  };

  const removeItem = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <h1>Formulaire</h1>
        <label htmlFor='value'>Valeur</label>
        <input
          type='text'
          id='value'
          name='value'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Soumettre</button>
      </form>

      {inputs.map((item) => {
        const { id, input } = item;

        return (
          <div key={id}>
            <h4>{input}</h4>
            <button onClick={removeItem(id)}>supprimer</button>
          </div>
        );
      })}
    </article>
  );
};

export default List;
