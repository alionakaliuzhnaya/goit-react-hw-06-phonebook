import React from 'react';
import { ContactButton, ContactItem } from "./Contact.styled";
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';


function Contact({name,number,id}) {
    const dispatch=useDispatch();
    
     return (
        <ContactItem key={id}>
               {name}: {number}
            <ContactButton
              type="button"
              onClick ={() => dispatch(deleteContacts(id))}>
              Delete
            </ContactButton>
          </ContactItem>

    )
}

export default Contact;