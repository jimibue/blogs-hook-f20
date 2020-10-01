// have this work for get request on mount, worry about other later
// expecting back array of data
import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      setLoading(true);
      setError(null);
      let res = await axios.get(url);
      // set my data
      setValue(res.data);
    } catch (err) {
      setError(err.response);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return { data: value, loading, error };
};

export default useAxios;
