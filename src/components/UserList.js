import React, { useState } from 'react';
import './UserList.css'; 

const UserList = ({ users, searchTerm, statusFilter, roleFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
 
  const filteredUsers = users.filter(user => {
    const matchesSearchTerm = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === '' || user.status === statusFilter;
    const matchesRole = roleFilter === '' || user.role === roleFilter;

    return matchesSearchTerm && matchesStatus && matchesRole;
  });
 
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="user-list-container">
      <table className="user-table">
        <thead>
          <tr className='sections'>
            <th>Record ID</th>
            <th>Teacher Name</th>
            <th>Teacher ID</th>
            <th>Department</th>
            <th>Student</th>
            <th>Status</th>
            <th>All Details</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{indexOfFirstUser + index + 1}</td> {/* Record ID */}
                <td>{user.name}</td> {/* Teacher Name */}
                <td>{user.id}</td> {/* Teacher ID */}
                <td>{user.department || 'N/A'}</td> {/* Department */}
                <td>{user.student || 'No Data'}</td> {/* Student */}
                <td>
                  <span
                    className={`status-circle ${user.status === 'active' ? 'active' : 'inactive'}`}
                  ></span>
                  {user.status}
                </td>
                <td>
                  <button className="details-button">View Details</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
 
      <div className="pagination"> 
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
