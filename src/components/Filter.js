import React from 'react';

const Filter = ({ statusFilter, setStatusFilter, roleFilter, setRoleFilter, clearFilters }) => {
  return (
    <div className="filter-container">
      
      <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
        <option value="">Filter by Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
 
      <select onChange={(e) => setRoleFilter(e.target.value)} value={roleFilter}>
        <option value="">Filter by Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
 
      <button onClick={clearFilters} className="clear-filter-btn">
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
