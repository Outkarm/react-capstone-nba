import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack, IoMicSharp, IoSettingsOutline } from 'react-icons/io5';
import '../styles/style.css';

const Navigation = () => (
  <nav className="the-navbar">
    <Link to="/">
      <IoChevronBack />
    </Link>
    <h2>NBA Information</h2>
    <div className="set-mic">
      <IoMicSharp />
      <IoSettingsOutline />
    </div>
  </nav>
);

export default Navigation;
