import React from 'react';
import "./mainsection.css";
import Searchbar from '../SearchBar/searchbar';
import Userlist from '../UserList/userlist';
const Mainsection = () => {
  return (
  <div className='main-section'>
      <h1 className='heading'>Customer Service</h1>
      <div className='main-section-content'>
      <Searchbar/>
      </div>
      <Userlist />
  </div>
  )
}

export default Mainsection