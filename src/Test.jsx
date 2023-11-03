import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7237/api/ExpensesAndRevenues"
          //   { withCredentials: true }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      <h2>Simple Axios Example</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data[0].debit}
          {data[0].credit}
        </div>
      )}
    </div>
  );
};

export default Test;
