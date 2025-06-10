import React, { useEffect, useState } from 'react';

function ViewMocks() {
  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    const fetchMocks = async () => {
      const response = await fetch('https://reqcheck-71k8.onrender.com/api/mocks');
      const data = await response.json();
      setMocks(data);
    };
    fetchMocks();
  }, []);

  return (
    <div className='ViewMocks'>
      <h2>All Mock Routes</h2>
      <ul>
        {mocks.map((mock) => (
          <li key={mock.id}>
            <strong>{mock.method}</strong> - <code>{mock.route}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewMocks;
