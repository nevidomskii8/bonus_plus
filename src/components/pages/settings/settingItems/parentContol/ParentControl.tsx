import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFocusActive, getFocusSection, setFocusActive, setFocusSection } from "../../../../../redux/reducer/mainState";
import styles from "./parentControl.module.scss";

const { checkControl } = styles
const { parentControl } = styles
const { styleUl } = styles
const { activeLi } = styles
const { styleLi } = styles



export const ParContol = () => {
  const dispatch = useDispatch()
  const focusSection = useSelector(getFocusSection);
  const [currentFocus, setCurrentFocus] = useState("bday");
  const [isActive, setIsActive] = useState(false);
  const isActiveFocus = useSelector(getFocusActive);

  useEffect(() => {
    focusSection === "parent_control" ? setIsActive(true) : setIsActive(false);
  }, [focusSection]);

  useEffect(() => {
    isActive && setCurrentFocus(isActiveFocus);
  }, [isActiveFocus]);

  useEffect(() => {
    dispatch(setFocusSection("parent_control"))
  }, [])

  return (
    <div className={`parent_control focusable ${focusSection === "parent_control" && isActive ? "focused" : ""} ${parentControl}`}>

      <ul className={`${styleUl}`}>
        <li className={`${styleLi} bday ${currentFocus === "bday" ? `active ${activeLi}` : ''}`}>
          <span>Спрашивать дату рождения при зупуске фильма 16+</span>
          <div className={checkControl}>
            <input type="checkbox" id="bday" name="userName" />
            <label htmlFor="bday" ></label>
          </div>
        </li>

        <li
          className={`${styleLi} password ${currentFocus === "password" ? `active ${activeLi}` : ""}`}
        >
          <span>Спрашивать пароль при запуске фильма 16+</span>
          <div className={checkControl}>
            <input type="checkbox" id="password" name="userSurName" />
            <label htmlFor="password"></label>
          </div>
        </li>
      </ul>
      <div>
        После включения одной из данных функций для просмотра каждого фиьма или сериала с возрастным рейтингом 16+ будет неободимо ввести дату вашего рождения или пароль.
      </div>
    </div >
  );
};
