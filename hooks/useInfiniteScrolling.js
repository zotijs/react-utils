import { useEffect, useMemo, useCallback } from "react";

const useInfiniteScrolling = (query, setQuery, callback) => {
  useMemo(() => {
    callback(query);
  }, [query, callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = useCallback(
    () =>
      window.innerHeight + window.scrollY >= document.body.scrollHeight &&
      setQuery({ ...query, page: ++query.page }),
    [query, setQuery]
  );
};

export default useInfiniteScrolling;
