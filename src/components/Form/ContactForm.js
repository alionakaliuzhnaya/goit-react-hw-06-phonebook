import React, {  useState } from 'react';
import { nanoid } from 'nanoid'
import { FormContainer,Label,FormButton,FormInput } from './Form.styled';
import { useDispatch } from 'react-redux';
import {addContacts}   from '../../redux/contactsSlice';
import  toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { itemSelector } from 'redux/contacts-selectors';


export default function Form (){
  const dispatch = useDispatch();
  const contacts=useSelector(itemSelector)
  const [name,setName]=useState("");
  const [number,setNumber]=useState("")

 const nameInputId = nanoid();
  const  numberInputId = nanoid();
  const id = nanoid();

 const handleChange = event => {
  const { name, value } = event.target;

  switch (name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;

    default:
     return;
  };
}



const handleSubmit = event => {
  event.preventDefault();
  contacts.find(contact=>contact.name===name)
   ? toast.error(`${name} is already in contact`)      
  :dispatch(addContacts({id,name,number}));
  reset();
  console.log(name, number);

};



const reset=()=> {
  setName('');
setNumber('');
};

 

return (
  <FormContainer onSubmit={handleSubmit}>
    <Label htmlFor={name}>Name </Label>
    <FormInput
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name} 
  onChange={handleChange}
  id={nameInputId}
/>
    

    <Label htmlFor={number}> Number </Label>
    <FormInput
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number} 
  onChange={handleChange}
  id={numberInputId}
/>
  
    <FormButton type='submit'>Add contact</FormButton>
  </FormContainer>

  );

 }