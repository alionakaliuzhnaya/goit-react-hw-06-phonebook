import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export default function Filter () {
const dispatch=useDispatch();
  return(
<FilterLabel>
    Find contacts by name
    <FilterInput type="text"  onChange={event=>dispatch(changeFilter(event.currentTarget.value))} />
  </FilterLabel>
);}



