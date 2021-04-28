import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFocusSection } from '../../../../redux/actions/mainStateActions'
import {
  getFocusActive,
  getFocusSection,
} from '../../../../redux/selectors/mainStateSelector'

export const DetailSetting = () => {
  const focusSection = useSelector(getFocusSection)
  const dispatch = useDispatch()
  const active = useSelector(getFocusActive)
  const [isActive, setIsActive] = useState(false)
  const [currentChoose, setCurrentChoose] = useState('collections')

  useEffect(() => {
    focusSection === 'setup-detail' ? setIsActive(true) : setIsActive(false)
  }, [focusSection])

  useEffect(() => {
    isActive && setCurrentChoose(active)
  }, [active])

  useEffect(() => {
    setIsActive(true)
    setCurrentChoose('collections')
    dispatch(setFocusSection('setup-detail'))
  }, [])

  return (
    <div
      className={`setup-detail focusable ${
        focusSection === 'setup-detail' ? 'focused' : ''
      }`}
    >
      detailSetting
    </div>
  )
}
