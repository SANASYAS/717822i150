import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://cors-anywhere.herokuapp.com/http://20.244.56.144/test/even"; // 🚀 CORS Proxy URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI2NTA2LCJpYXQiOjE3NDI2MjYyMDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ1NDkyNmUwLTBkZjEtNDQzOS1iMGY3LTQ3NjkwODAyM2ExYyIsInN1YiI6IjcxNzgyMmkxNTBAa2NlLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiS2FycGFnYW0gQ29sbGVnZSBvZiBFbmdpbmVlcmluZyIsImNsaWVudElEIjoiNDU0OTI2ZTAtMGRmMS00NDM5LWIwZjctNDc2OTA4MDIzYTFjIiwiY2xpZW50U2VjcmV0IjoiQXdUeXNubXplc1pEZ0VOZyIsIm93bmVyTmFtZSI6IlNhbmFzeWEiLCJvd25lckVtYWlsIjoiNzE3ODIyaTE1MEBrY2UuYWMuaW4iLCJyb2xsTm8iOiI3MTc4MjJpMTUwIn0.Q_CyuBL-sCkXM-JG-9FWzlE2ScILjpidzdtLOljHSv8",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>API Data Fetching</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
