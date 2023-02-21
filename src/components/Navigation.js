import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack, IoMicSharp, IoSettingsOutline } from 'react-icons/io5';
// import PropTypes from "prop-types";

const Navigation = () => (
  <nav>
    <Link to="/">
      <IoChevronBack />
    </Link>
    <h2>NBA Information</h2>
    <div>
      <IoMicSharp />
      <IoSettingsOutline />
    </div>
  </nav>
);

// Navigation.propTypes = {
//   head: PropTypes.string.isRequired,
// };

export default Navigation;
