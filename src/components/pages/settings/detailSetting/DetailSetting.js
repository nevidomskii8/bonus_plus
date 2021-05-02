import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFocusSection } from '../../../../redux/actions/mainStateActions'
import {
  getFocusActive,
  getFocusSection,
  getStateSettingList,
} from '../../../../redux/selectors/mainStateSelector'
import { Connect } from '../settingItems/connect/Connect'
import { ForTV } from '../settingItems/forTV/ForTV'
import { InfoVideo } from '../settingItems/infoVidio/InfoVideo'
import { ParContol } from '../settingItems/parentContol/ParentControl'
import { PersonalInfo } from '../settingItems/PersonalInfo/PersonalInfo'
import { TimeArea } from '../settingItems/timeArea/TimeArea'

export const DetailSetting = () => {
  const focusSection = useSelector(getFocusSection)
  const state = useSelector(getStateSettingList)
  const dispatch = useDispatch()
  const active = useSelector(getFocusActive)
  const [isActive, setIsActive] = useState(false)
  const [currentChoose, setCurrentChoose] = useState('collections')

  useEffect(() => {
    focusSection === 'setup-detail' ? setIsActive(true) : setIsActive(false)
  }, [focusSection])

  useEffect(() => {}, [state])

  useEffect(() => {
    isActive && setCurrentChoose(active)
  }, [active])

  useEffect(() => {
    setIsActive(true)
    setCurrentChoose('collections')
  }, [])

  return (
    <div
      className={`setup-detail focusable ${
        focusSection === 'setup-detail' ? 'focused' : ''
      }`}
    >
      {state === 'presonal_info' && <PersonalInfo />}
      {state === 'parent_control' && <ParContol />}
      {state === 'time_area' && <TimeArea />}
      {state === 'for_tv' && <ForTV />}
      {state === 'info_video' && <InfoVideo />}
      {state === 'connect' && <Connect />}
    </div>
  )
}
