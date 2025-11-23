import { useState, useCallback } from "react";

export const useColumnNavigation = (initialView) => {
  const [stack, setStack] = useState([initialView]);

  const push = useCallback((view) => {
    setStack((prev) => [...prev, view]);
  }, []);

  const pop = useCallback(() => {
    setStack((prev) => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, -1);
    });
  }, []);

  const currentView = stack[stack.length - 1];

  return {
    currentView,
    push,
    pop,
    canGoBack: stack.length > 1,
    stackLength: stack.length,
  };
};
