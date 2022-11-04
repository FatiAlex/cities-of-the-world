import * as React from 'react';
import Header from './header.component';
import Router from './router.component';

const Layout = () => {
  // render
  return (
    <div className="cities-of-the-world">
      <Header />
      <div className="layout-body">
        <Router />
      </div>
    </div>
  );
};

export default Layout;
