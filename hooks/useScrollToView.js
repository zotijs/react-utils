import { useEffect } from "react";

const useScrollToView = ref => {
  useEffect(() => {
    ref &&
      ref.current &&
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
  }, [ref]);
};

export default useScrollToView;
