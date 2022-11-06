import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const numberId = nanoid();
  const nameId = nanoid();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleInputChangeNumber = event => {
    setNumber(event.currentTarget.value);
    // }
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          id={nameId}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={numberId}>
        Number
        <input
          id={numberId}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
