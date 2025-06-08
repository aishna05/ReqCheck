import React, { useState, useEffect } from "react";

function RequestHistory() {
  const [requestHistory, setRequestHistory] = useState([]);
  //to get data from the backend
  useEffect(() => {
    const fetchRequestHistory = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/request/api/request-history"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRequestHistory(data);
      } catch (error) {
        console.error("Error fetching request history:", error);
      }
    };

    fetchRequestHistory();
  }, []);
  return (
    <div className="RequestHistory">
      <h2>Request History</h2>
      <div clasName="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Request Body</th>
            <th>Response Status</th>
            <th>Response Body</th>
          </tr>
        </thead>
        <tbody>
          {requestHistory.map((request, index) => (
            <tr key={index}>
              <td>{request.method}</td>
              <td>{request.url}</td>
              <td>
                {typeof request.request_body === "object"
                  ? JSON.stringify(request.request_body)
                  : request.request_body}
              </td>
              <td>
                {typeof request.response_status === "object"
                  ? JSON.stringify(request.response_status)
                  : request.response_status}
              </td>
              <td>
                {typeof request.response_body === "object"
                  ? JSON.stringify(request.response_body)
                  : request.response_body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default RequestHistory;
