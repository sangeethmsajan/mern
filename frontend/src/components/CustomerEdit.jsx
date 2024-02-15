import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CustomerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Placeholder for customer data
  const [customer, setCustomer] = useState({ name: '', phone: '', email: '', address: '' });

  useEffect(() => {
    // Fetch the customer data from the backend using the id
    // This is a placeholder logic
    setCustomer({ name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', address: '123 Main St' });
}, [id]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement functionality to update customer data in the backend
    console.log(customer);
    navigate('/dashboard/customers');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={customer.name}
          onChange={e => setCustomer({ ...customer, name: e.target.value })}
          required
        />
      </label>
      {/* Repeat for phone, email, and address with similar pattern */}
      <button type="submit">Update Customer</button>
    </form>
  );
}

export default CustomerEdit;
