import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoaing] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoaing(true);
    setError(null);

    try {
      const res = await cb(...args);
      setData(res);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoaing(false);
    }
  };
  return { data, loading, error, fn, setData };
};
export default useFetch;
