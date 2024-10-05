import React from 'react';
import './SideHeader.css';
import finalLogo from './Final Logo 3.png';
import Teacher from './Teacher.png';
import Deparment from './Department.png';
import Library from './Library.png';
import AddTeacher from './Add Teacher.png';
import { TiThMenu } from 'react-icons/ti';

const SideHeader = ({ setSearchTerm, setStatusFilter, setRoleFilter, clearFilters }) => {
  return (
    <div className="SideHeader-container">
      <div className="Sd-elements">
        <img src={finalLogo} alt="logo" width="30px" />
        <h2>QMS</h2>
        <TiThMenu />
      </div>

      <div className="filter-options">
        <div className="filter-input">
          <input
            type="text"
            placeholder="Search by name or email"
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-dropdown">
          <label>Status:</label>
          <select onChange={e => setStatusFilter(e.target.value)}>
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="filter-dropdown">
          <label>Role:</label>
          <select onChange={e => setRoleFilter(e.target.value)}>
            <option value="">All</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button onClick={clearFilters}>Clear Filters</button>
      </div>

      <div className="menu-options">
        <p>
          <img src={Teacher} width="15px" alt="Teacher" /> Teachers
        </p>
        <p>
          <img src={Deparment} width="15px" alt="Department" /> Department
        </p>
        <p>
          <img src={Library} width="15px" alt="Library" /> Library
        </p>
        <p>
          <img src={AddTeacher} width="15px" alt="Add Teacher" /> Add Teacher
        </p>
      </div>
    </div>
  );
};

export default SideHeader;
