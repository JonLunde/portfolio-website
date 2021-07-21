import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import '../../scss/main.scss';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
