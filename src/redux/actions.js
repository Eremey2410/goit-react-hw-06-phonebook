import { nanoid } from 'nanoid';

export const addContact = (contactName, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: contactName,
      number,
    },
  };
};
export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};
export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
