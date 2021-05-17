/* eslint-disable no-console */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setChooseGanre,
  setChooseNav,
  setFocusActive,
  setFocusSection,
  setIsKeyBoard,
  setStateCarusel,
  setStateSettingList,
  getIsKeyBoard,
} from "../redux/reducer/mainState";

export const useKeyDown = () => {
  const dispatch = useDispatch();
  const [isPlugIn, setIsPlugIn] = useState(false);
  const isKeyBoard = useSelector(getIsKeyBoard);

  const handleKeyDown = (event) => {
    const focused = document.querySelectorAll(".focused");
    const activeLi = document.querySelector(".active");

    // TODO пересмотреть проверку на валидность activeLi

    if (event.key === "ArrowDown") {
      if (focused[0].classList.contains("isCarusel")) {
        activeLi.parentElement.nextSibling
          ? dispatch(setStateCarusel(activeLi.parentElement.nextSibling.children[0].classList[2]))
          : dispatch(setStateCarusel(activeLi.parentElement.parentElement.children[0].children[0].classList[2]));
      }
      if (activeLi?.nextSibling) {
        dispatch(setFocusActive(activeLi?.nextSibling.classList[1]));
      } else {
        dispatch(setFocusActive(activeLi?.parentNode.childNodes[0].classList[1]));
      }
    }

    if (event.key === "ArrowUp") {
      if (focused[0].classList.contains("isCarusel")) {
        const length = activeLi.parentElement.parentElement.children.length - 1;
        activeLi.parentElement.previousSibling
          ? dispatch(setStateCarusel(activeLi.parentElement.previousSibling.children[0].classList[2]))
          : dispatch(setStateCarusel(activeLi.parentElement.parentElement.children[length].children[0].classList[2]));
      }

      if (activeLi?.previousSibling) {
        dispatch(setFocusActive(activeLi?.previousSibling.classList[1]));
      } else {
        const len = activeLi?.parentNode.childNodes.length - 1;
        dispatch(setFocusActive(activeLi?.parentNode.childNodes[len].classList[1]));
      }
    }

    const focusable = document.querySelectorAll(".focusable");

    if (event.key === "ArrowLeft") {
      for (let i = 0; i < focusable.length; i++) {
        if (focusable[i].classList.contains("focused") && focusable[i].previousElementSibling) {
          dispatch(setFocusSection(focusable[i].previousElementSibling.classList[0]));
          return;
        }
      }
    }

    if (event.key === "ArrowRight") {
      for (let i = 0; i < focusable.length; i++) {
        if (focusable[i].classList.contains("focused") && focusable[i].nextElementSibling) {
          dispatch(setFocusSection(focusable[i].nextElementSibling.classList[0]));
          return;
        }
      }
    }

    if (event.key === "Enter") {
      switch (focused[0].classList[0]) {
        case "navigation":
          dispatch(setChooseNav(activeLi.classList[1]));
          return;
        case "list-genres":
          dispatch(setFocusSection("genres"));
          dispatch(setChooseGanre(activeLi.classList[1]));
          return;
        case "item-genres":
          console.log("item-genres");
          return;
        case "item-genres-detail":
          console.log("item-genres-detail");
          return;
        case "parent_control":
          dispatch(setIsKeyBoard(true));
          return;
        case "setting":
          dispatch(setStateSettingList(activeLi.classList[1]));
          return;
        default:
          return;
      }
    }
  };

  useEffect(() => {
    setIsPlugIn(!isKeyBoard);
  }, [isKeyBoard]);

  useEffect(() => {
    if (isPlugIn) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      return window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlugIn]);

  return { setIsPlugIn };
};
