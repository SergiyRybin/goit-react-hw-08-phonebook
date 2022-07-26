import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleFilter} />
    </label>
  );
};

export default Filter;
