import * as React from 'react';
import { BiWorld } from 'react-icons/bi';

const Header = () => {
  // render
  return (
    <div className="layout-header">
      <div className="layout-header__icon-container">
        <BiWorld
          className="layout-header__icon"
          color="white"
          size="4rem"
          data-testid="header-icon-test"
        />
      </div>
    </div>
  );
};

export default Header;
