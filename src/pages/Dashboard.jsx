/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/dashboard");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      {items.map((i) => (
        <p>
          {i.lubricantname},{(i, type)}
        </p>
      ))}
    </>
  );
};

export default Dashboard;
