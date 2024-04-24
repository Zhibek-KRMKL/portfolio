import { Button } from "antd";
import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";

// axios - request method
// try / catch - alternative for asyncronous request "then / catch"
// async keyword ALWAYS exist with a sister - await keyword

function useRequest(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  console.log(data, loading, error);
  return { data, loading, error };
}

export default useRequest;
