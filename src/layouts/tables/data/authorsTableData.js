import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://simobile.singapoly.com/api/trpl/customer-service/")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const data = {
    columns: [
      { Header: "ID", accessor: "id_customer_service" },
      { Header: "NIM", accessor: "nim" },
      { Header: "Title Issues", accessor: "title_issues" },
      { Header: "Description Issues", accessor: "description_issues" },
      { Header: "Rating", accessor: "rating" },
      { Header: "Division Department", accessor: "division_department_name" },
      { Header: "Priority Name", accessor: "priority_name" },
    ],
    rows: records.map((record) => ({
      id_customer_service: record.id_customer_service,
      nim: record.nim,
      title_issues: record.title_issues,
      description_issues: record.description_issues,
      rating: record.rating,
      division_department_name: record.division_department_name,
      priority_name: record.priority_name,
    })),
  };

  return data;
}

export default FetchData;
