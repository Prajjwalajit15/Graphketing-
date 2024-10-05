import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import SideHeader from './components/SideHeader';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]); 
  const [filteredUsers, setFilteredUsers] = useState([]);  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(''); // Define status filter
  const [roleFilter, setRoleFilter] = useState(''); // Define role filter

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        // Simulate additional fields
        data = data.map(user => ({
          ...user,
          department: Math.random() > 0.5 ? 'Math' : 'Science',
          student: Math.random() > 0.5 ? 'John Doe' : 'Jane Smith',
          status: Math.random() > 0.5 ? 'active' : 'inactive',
        }));
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [searchTerm, statusFilter, roleFilter]); // Include roleFilter

  const handleFilter = () => {
    let updatedUsers = [...users];

    if (searchTerm) {
      updatedUsers = updatedUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter) {
      updatedUsers = updatedUsers.filter(user => user.status === statusFilter); // Use status filter
    }

    if (roleFilter) {
      updatedUsers = updatedUsers.filter(user => user.role === roleFilter); // Use role filter
    }

    setFilteredUsers(updatedUsers);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('');
    setRoleFilter('');
  };

  return (
    <div className="app-container">
      <SideHeader 
        setSearchTerm={setSearchTerm} 
        setStatusFilter={setStatusFilter} // Pass down status filter
        setRoleFilter={setRoleFilter} // Pass down role filter
        clearFilters={clearFilters} 
      />
      <div className="main-content">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <UserList 
        users={users} 
        searchTerm={searchTerm}
        statusFilter={statusFilter} 
        roleFilter={roleFilter} 
      />
      </div>
    </div>
  );
};

export default App;
