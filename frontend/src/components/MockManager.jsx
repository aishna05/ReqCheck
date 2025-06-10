import React, { useState } from 'react';

function MockManager() {
    const [id, setId] = useState(null);
    const [route, setRoute] = useState('/mock/user');
    const [method, setMethod] = useState('GET');
    const [responseText, setResponseText] = useState('{\n  "message": "Hello from mock!"\n}'); // as string

    const addMock = async () => {
        let response_json;

        try {
            response_json = JSON.parse(responseText); // only parse on submit
        } catch (err) {
            alert('Invalid JSON in mock response');
            return;
        }

        const response = await fetch('https://reqcheck-71k8.onrender.com/api/mock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                route,
                method,
                response_json
            }),
        });

        if (response.ok) {
            const data = await response.json();
            setId(data.id);
            alert('Mock added successfully!');
        } else {
            const err = await response.json();
            alert('Failed to add mock: ' + err.detail);
        }
    };

    const deleteMock = async () => {
        if (!id) {
            alert('Please provide a valid ID');
            return;
        }

        const response = await fetch(`https://reqcheck-71k8.onrender.com/api/mock/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setId(null);
            alert('Mock deleted successfully!');
        } else {
            alert('Failed to delete mock');
        }
    };

    return (
        <div className="mock-manager">
            <h1>Mock API Manager</h1>

            <label>Route:</label>
            <input value={route} onChange={(e) => setRoute(e.target.value)} />

            <label>Method:</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>

            <label>Response JSON:</label>
            <textarea
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                rows={6}
                cols={50}
            />

            <br /><br />
            <button onClick={addMock}>Add Mock</button>
            <button onClick={deleteMock}>Delete Mock</button>
        </div>
    );
}

export default MockManager;
