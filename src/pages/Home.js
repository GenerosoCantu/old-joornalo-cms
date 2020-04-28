import React from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../components/contacts/Contacts';
import ContactForm from '../components/contacts/ContactForm';
import ContactFilter from '../components/contacts/ContactFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <ul>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to="/front">Front</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
