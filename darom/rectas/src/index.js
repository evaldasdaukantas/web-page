import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './Body'
import Navigation from './Navigation'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Body />
    <Footer />
  </React.StrictMode>
);

