import React from 'react';
import './style.css';
import { Navbar } from 'react-bootstrap';

export default function navbar() {
  return (
    <Navbar bg='dark' variant='dark' className='navbar mb-3'>
      <Navbar.Brand href='/gitstreet'>GitStreet</Navbar.Brand>
    </Navbar>
  );
}
