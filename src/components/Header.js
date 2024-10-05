import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiListSettingsFill } from "react-icons/ri";


import './Header.css';
import HeaderPc from './Header-pc.png';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="header-container">
      <h1>Welcome, User!</h1>
      <div className="search-input-wrapper">
        <IoSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search here..."
          className="search-input"
        />
        <FaArrowRight className="arrow-icon" />
      </div>
      <RiListSettingsFill />

      <FaBell />
      <img src={HeaderPc} alt='profilePic' width="30px" />
      <IoIosArrowDown />

    </div>
  );
};

export default Header;
