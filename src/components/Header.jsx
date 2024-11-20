import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Foodie Finds</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants..." />
      </div>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;


