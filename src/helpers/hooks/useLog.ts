import { useEffect, useRef } from "react";

const useLog = (componentName = "", effect = useEffect) => {
  const render = useRef(0);
  const call = useRef(0);

  const consoleState = () => `{call:${call.current},render:${render.current}}(${componentName})`;
  const log = (...args: any[]) => console.log(...args, consoleState());

  effect(() => {
    render.current += 1;
  });
  call.current += 1;

  return log;
};

export default useLog;
