/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */

/* Components Imports */
import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Hero from './Layout/Hero';
import Footer from './Layout/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
