import React from 'react';

const Header = () => {
  return(
    <div className="header-main">
      <img src="include source here" alt="kyakulya logo"/>
      <input type="text" name="search-bar" id="search" placeholder="search product|market|farmer|supplier"/>
      <button type="submit">Sign up/ Log in</button>
      <button>inventory</button>
    </div>
  )
}

export default Header;
