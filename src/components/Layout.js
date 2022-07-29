import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet'

function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="http://localhost/refresh/css/all.css" />
        <script src="http://localhost/refresh/js/refresher.js" type='module'></script>
      </Helmet>
      <Navbar />
      { children }
    </div>
  );
}

export default Layout;