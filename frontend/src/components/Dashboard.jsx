import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logout from './Logout';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: '10px', width: '250px', height: '100vh', background: '#f0f0f0' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/dashboard/customers">Customers</Link></li>
          <li><Link to="/dashboard/invoices">Invoices</Link></li>
        </ul>
        <Logout />
      </div>
      <main style={{ flex: 1, padding: '10px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
