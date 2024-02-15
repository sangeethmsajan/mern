import React from 'react';
import { Link } from 'react-router-dom';

function CustomerList() {
  // Placeholder data - replace with actual data fetched from a backend
  const customers = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', address: '123 Main St' },
    // Add more customer objects for demonstration
  ];

  return (
    <div>
      <h2>Customers</h2>
      <Link to="/dashboard/customers/create">Add New Customer</Link>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.name} - <Link to={`/dashboard/customers/edit/${customer.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
