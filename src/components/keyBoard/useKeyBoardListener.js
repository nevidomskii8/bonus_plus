import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsKeyBoard } from "../../redux/reducer/mainState";

export const useKeyBoardListener = () => {
  const focused = document.querySelectorAll(".focusKey");
  const dispatch = useDispatch();
  const [isBoardListener, setIsBoardListener] = useState(false);

  function handleKeyBoard(event) {
    console.dir(focused[0]);
    console.dir(focused);
    if (event.key === "ArrowDown") {
      return null;
    }
    if (event.key === "ArrowUp") {
      return null;
    }
    if (event.key === "ArrowLeft") {
      return null;
    }
    if (event.key === "ArrowRight") {
      return null;
    }

    if (event.key === "Enter") {
      dispatch(setIsKeyBoard(false));
    }
    return null;
  }
  useEffect(() => {
    if (isBoardListener) {
      window.addEventListener("keydown", handleKeyBoard);
    } else {
      window.removeEventListener("keydown", handleKeyBoard);
    }
    return () => window.removeEventListener("keydown", handleKeyBoard);
  }, [isBoardListener]);

  return { setIsBoardListener };
};
