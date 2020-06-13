/* eslint-disable linebreak-style */
import React from 'react';
import { ReadPreference } from 'mongodb';

const Header =({message})=>{
  return (
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes ={
  message: ReadPreference.propTypes.string
};

export default Header;