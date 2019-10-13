import { useEffect } from "react";
import history from "../utils/history";

const useNavigateToPath = (callback, val, path) => {
  useEffect(() => {
    callback(val) && history.push(path);
  }, [callback, val]);
};

export default useNavigateToPath;
