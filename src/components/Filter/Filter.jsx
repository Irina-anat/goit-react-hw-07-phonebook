import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filtersSlices";
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  //console.log(filter)
        
  const handleChange = ({ target: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <label>
      <input
        type="text"
        placeholder="Find contacts by Name"
        value={filter}
        onChange={handleChange} />
    </label>
  );
};








/*import React from "react";
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
        <label>
            <input type='text' placeholder="Find contacts by Name" value={value} onChange={onChange} />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
*/