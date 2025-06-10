import { useState } from 'react';

function RequestForm() {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [requestBody, setRequestBody] = useState('{}');
    const [responseBody, setResponseBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let parsedRequestBody = null;
        if (requestBody.trim()) {
            try {
                parsedRequestBody = JSON.parse(requestBody);
            } catch {
                alert('❌ Invalid JSON in Request Body');
                return;
            }
        }

        try {
            // Make the actual request to the user-provided URL
            const actualResponse = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                ...(method !== 'GET' && { body: JSON.stringify(parsedRequestBody) })
            });

            const responseText = await actualResponse.text();
            let parsedResponseBody;
            try {
                parsedResponseBody = JSON.parse(responseText);
            } catch {
                parsedResponseBody = { raw: responseText };
            }

            setResponseBody(JSON.stringify(parsedResponseBody, null, 2));

            // Send to FastAPI backend to log
            const logPayload = {
                method,
                url,
                request_body: parsedRequestBody || {},
                response_body: parsedResponseBody,
                response_code: actualResponse.status,
                timestamp: new Date().toISOString(),
                details: '', // you can add any details you want here
                status: actualResponse.status >= 200 && actualResponse.status < 300 ? 'success' : 'error',
            };

            const logResponse = await fetch('https://reqcheck-71k8.onrender.com/request/api/requestlog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(logPayload)
            });

            if (logResponse.ok) {
                alert('✅ Request log saved!');
            } else {
                alert('⚠️ Failed to log the request');
            }
        } catch (err) {
            console.error('Request failed:', err);
            alert('❌ Error while sending request or logging it');
        }
    };

    return (
        <div className='RequestForm'>
            <h2>Request Form</h2>
            <form className='request-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Method</label>
                    <select value={method} onChange={e => setMethod(e.target.value)} className='form-control'>
                        <option value='GET'>GET</option>
                        <option value='POST'>POST</option>
                        <option value='PUT'>PUT</option>
                        <option value='DELETE'>DELETE</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>URL</label>
                    <input type='text' value={url} onChange={e => setUrl(e.target.value)} className='form-control' placeholder='Enter URL' />
                </div>
                <div className='form-group'>
                    <label>Request Body (JSON)</label>
                    <textarea value={requestBody} onChange={e => setRequestBody(e.target.value)} className='form-control' placeholder='Enter request body'></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Send Request</button>
            </form>
            <div className='form-group' style={{ marginTop: '1em' }}>
                <label>Response Body (JSON)</label>
                <textarea value={responseBody} readOnly className='form-control' rows={6} placeholder='Response will appear here'></textarea>
            </div>
        </div>
    );
}

export default RequestForm;
