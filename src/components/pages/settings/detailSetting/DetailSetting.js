import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getFocusActive,
  getFocusSection,
  getStateSettingList,
} from "../../../../redux/reducer/mainState";
import { Connect } from "../settingItems/connectAccaunt/ConnectAccaunt";
import { ForTV } from "../settingItems/forTV/ForTV";
import { InfoVideo } from "../settingItems/infoVidio/InfoVideo";
import { ParContol } from "../settingItems/parentContol/ParentControl";
import { PersonalInfo } from "../settingItems/personalInfo/PersonalInfo";
import { TimeArea } from "../settingItems/timeArea/TimeArea";

const DetailSetting = () => {
  const focusSection = useSelector(getFocusSection);
  const state = useSelector(getStateSettingList);
  const active = useSelector(getFocusActive);
  const [isActive, setIsActive] = useState(false);
  const [currentChoose, setCurrentChoose] = useState("collections");

  useEffect(() => {
    focusSection === "setup-detail" ? setIsActive(true) : setIsActive(false);
  }, [focusSection]);

  useEffect(() => {}, [state]);

  useEffect(() => {
    isActive && setCurrentChoose(active);
  }, [active]);

  useEffect(() => {
    setIsActive(true);
    setCurrentChoose("collections");
    console.log(active);
  }, []);

  return (
    <div className={`setup-detail focusable ${focusSection === "setup-detail" ? "focused" : ""}`}>
      {state === "presonal_info" && <PersonalInfo />}
      {state === "parent_control" && <ParContol />}
      {state === "time_area" && <TimeArea />}
      {state === "for_tv" && <ForTV />}
      {state === "info_video" && <InfoVideo />}
      {state === "connect" && <Connect />}
    </div>
  );
};

export default DetailSetting;
