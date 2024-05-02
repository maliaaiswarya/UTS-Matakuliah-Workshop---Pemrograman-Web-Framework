import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://simobile.singapoly.com/api/priority-issues")
      .then((res) => {
        setRecords(res.data.datas);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="mt-3">
        <h3>Fetch Data from API in React with Axios</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Priority Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Deleted At</th>
            </tr>
          </thead>
          <tbody>
            {records &&
              records.map((item, index) => (
                <tr key={index}>
                  <td>{item.id_priority}</td>
                  <td>{item.priority_name}</td>
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                  <td>{item.deleted_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchData;
