import { useState } from 'react';
import { Link } from 'react-router-dom';

function person({name}) {
    console.log(name);
  return (
      
    <p>{name}</p>
  );
}

export default person;
