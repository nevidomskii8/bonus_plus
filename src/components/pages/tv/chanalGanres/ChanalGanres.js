import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { getFocusActive, getFocusSection, setFocusSection } from "../../../../redux/reducer/mainState";
import "./ChanalGanres.scss";

const ChanalGanres = () => {
  const focusSection = useSelector(getFocusSection);
  const dispatch = useDispatch();
  const active = useSelector(getFocusActive);
  const [isActive, setIsActive] = useState(false);
  const [currentChoose, setCurrentChoose] = useState("7");

  useEffect(() => {
    focusSection === "list-genres" ? setIsActive(true) : setIsActive(false);
  }, [focusSection]);

  useEffect(() => {
    isActive && setCurrentChoose(active);
  }, [active]);

  useEffect(() => {
    setIsActive(true);
    setCurrentChoose("7");
    dispatch(setFocusSection("list-genres"));
  }, []);

  return (
    <div className={`list-genres focusable ${focusSection === "list-genres" ? "focused" : ""}`}>
      <center>
        <h2>Телевидение</h2>
      </center>
      <ul>
        <li className={`tv-page_list 7 ${currentChoose === "7" && isActive ? "active" : ""}`}>
          <FormattedMessage id="app.tv.funny" />
        </li>
        <li className={`tv-page_list 3 ${currentChoose === "3" && isActive ? "active" : ""}`}>
          <FormattedMessage id="app.tv.sports" />
        </li>
        <li className={`tv-page_list 4 ${currentChoose === "4" && isActive ? "active" : ""}`}>
          <FormattedMessage id="app.tv.childrens" />
        </li>
        <li className={`tv-page_list 5 ${currentChoose === "5" && isActive ? "active" : ""}`}>
          <FormattedMessage id="app.tv.educational" />
        </li>
        <li className={`tv-page_list 6 ${currentChoose === "6" && isActive ? "active" : ""}`}>
          <FormattedMessage id="app.tv.musical" />
        </li>
        <li className={`tv-page_list 8 ${currentChoose === "8" && isActive ? "active" : ""}`}>
          <FormattedMessage id="app.tv.movies" />
        </li>
        <li className={`tv-page_list 10 ${currentChoose === "10" && isActive ? "active" : ""}`}>
          <FormattedMessage id="app.tv.news" />
        </li>
        <li className={`tv-page_list 9 ${currentChoose === "9" && isActive ? "active" : ""}`}>HD</li>
        <li className={`tv-page_list favorite ${currentChoose === "favorite" && isActive ? "active" : ""}`}>Любимые</li>
        <li className={`tv-page_list records ${currentChoose === "records" && isActive ? "active" : ""}`}>В записи</li>
        <li className={`tv-page_list custom ${currentChoose === "custom" && isActive ? "active" : ""}`}>Пользовательские</li>
        <li className={`tv-page_list home ${currentChoose === "home" && isActive ? "active" : ""}`}>Домашние</li>
        {/* <li><FormattedMessage id="app.tv.likes" /> </li>
                <li><FormattedMessage id="app.tv.recorders" /> </li>
                <li><FormattedMessage id="app.tv.users" /> </li>
                <li><FormattedMessage id="app.tv.find" /> </li> */}
      </ul>
    </div>
  );
};

export default ChanalGanres;
