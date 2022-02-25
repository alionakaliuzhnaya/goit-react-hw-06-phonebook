import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filterSelector, itemSelector } from '../../redux/contacts-selectors';
import Contact from "../contact/Contact"


  export default function ContactList () {
   
 const filter=useSelector(filterSelector);
 const contacts=useSelector(itemSelector);
    

  const getFiltredContacts=()=>{
     return filter
     ?contacts.filter(({name})=>
     name.toLowerCase().includes(filter.toLowerCase())
     )
     :contacts;
    }

  const filtredContacts=getFiltredContacts()

return(
    
   <ul >
   {filtredContacts.map(({id,name,number }) => (
   <Contact key={id} name={name} number={number} id={id}/>
     ))}
    </ul>
    
);};



  
  ContactList.propTypes={
      list:PropTypes.arrayOf(
          PropTypes.shape({
              id:PropTypes.string.isRequired,
              name:PropTypes.string.isRequired,
              number:PropTypes.string.isRequired
          })
      ),
     
  }
  