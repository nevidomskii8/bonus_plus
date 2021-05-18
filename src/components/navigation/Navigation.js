import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as TVSVG } from "../../assets/svg/tv-monitor.svg";
import { ReactComponent as PlaySVG } from "../../assets/svg/play-button.svg";
import { ReactComponent as Serialize } from "../../assets/svg/serialize.svg";
import { ReactComponent as SettingSVG } from "../../assets/svg/settings.svg";
import { ReactComponent as InfoSVG } from "../../assets/svg/information.svg";
import { ReactComponent as PayCard } from "../../assets/svg/pay-card.svg";
import { ReactComponent as Youtube } from "../../assets/svg/youtube.svg";
import { Context } from "../../wrapper/Wrapper";
import { getFocusActive, getFocusSection } from "../../redux/reducer/mainState";
import "./Navigation.scss";

const Navigation = () => {
  const context = useContext(Context);
  const focusSection = useSelector(getFocusSection);
  const active = useSelector(getFocusActive);
  const [isActive, setIsActive] = useState(false);
  const [currentChoose, setCurrentChoose] = useState("tv");

  useEffect(() => {
    focusSection === "navigation" ? setIsActive(true) : setIsActive(false);
  }, [focusSection]);

  useEffect(() => {
    isActive && setCurrentChoose(active);
  }, [active]);

  const check = focusSection === "navigation";
  const focus = check ? "show" : "hidden";

  return (
    <div className={`navigation focusable ${check ? "focused" : ""}`}>
      <div className="navigation__logo">{check && <span> BONUS-TV</span>}</div>
      <ul className="navigation__menu">
        <li className={`navigation__item-nav tv ${currentChoose === "tv" && isActive ? "active" : ""}`}>
          <TVSVG className="navigation__svg navigation__svg--tv" />
          <span className={focus}>Телевиденье</span>
        </li>
        <li className={`navigation__item-nav movie-types ${currentChoose === "movie-types" && isActive ? "active" : ""}`}>
          <PlaySVG className="navigation__svg navigation__svg--records" />
          <span className={focus}>Кино</span>
        </li>
        <li className={`navigation__item-nav serialize ${currentChoose === "serialize" && isActive ? "active" : ""}`}>
          <Serialize className="navigation__svg navigation__svg--records" />
          <span className={focus}>Сериалы</span>
        </li>
        <li className={`navigation__item-nav setup ${currentChoose === "setup" && isActive ? "active" : ""}`}>
          <SettingSVG className="navigation__svg navigation__svg--setup" />
          <span className={focus}>Настройки</span>
        </li>
        <li className={`navigation__item-nav paycard ${currentChoose === "paycard" && isActive ? "active" : ""}`}>
          <PayCard className="navigation__svg navigation__svg--info" />
          <span className={focus}>Оплата услуг</span>
        </li>
        <li className={`navigation__item-nav youtube ${currentChoose === "youtube" && isActive ? "active" : ""}`}>
          <Youtube className="navigation__svg navigation__svg--info" />
          <span className={focus}>Youtube</span>
        </li>
        <li className={`navigation__item-nav radio ${currentChoose === "radio" && isActive ? "active" : ""}`}>
          <InfoSVG className="navigation__svg navigation__svg--info" />
          <span className={focus}>Радио</span>
        </li>
      </ul>
      <select className="navigation__lang" value={context.locale} onChange={context.selectLanguage}>
        <option value="ru">Русский</option>
        <option value="uk">Украинский</option>
      </select>
    </div>
  );
};

export default Navigation;
