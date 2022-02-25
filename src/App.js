import React from 'react';
import './App.css';
import ContactForm from "./components/Form/ContactForm"
import ContactList from 'components/ContactList';
import Filter from "./components/Filter/Filter"
//import { nanoid } from 'nanoid'
import  { Toaster } from 'react-hot-toast';
import {Container,PhonebookTitle,ContactTitle} from "./App.styled"
//import { useSelector } from 'react-redux';
//import { itemSelector } from 'redux/contacts-selectors';

export default function App() {
    return(
    <Container>
      <PhonebookTitle>PhoneBook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter/>
      <ContactList />
       <Toaster />
    </Container>
    )
  
  }