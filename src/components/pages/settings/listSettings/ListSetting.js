/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFocusSection } from '../../../../redux/actions/mainStateActions'
import {
  getFocusActive,
  getFocusSection,
} from '../../../../redux/selectors/mainStateSelector'
import './ListSetting.scss'

const ListSettings = () => {
  const focusSection = useSelector(getFocusSection)
  const dispatch = useDispatch()
  const active = useSelector(getFocusActive)
  const [isActive, setIsActive] = useState(false)
  const [currentChoose, setCurrentChoose] = useState('presonal_info')

  useEffect(() => {
    focusSection === 'setting' ? setIsActive(true) : setIsActive(false)
  }, [focusSection])

  useEffect(() => {
    isActive && setCurrentChoose(active)
  }, [active])

  useEffect(() => {
    setIsActive(true)
    setCurrentChoose('presonal_info')
    dispatch(setFocusSection('setting'))
  }, [])

  return (
    <div
      className={`setting focusable ${
        focusSection === 'setting' && isActive ? 'focused' : ''
      }`}
    >
      <div className="title"> Настройки </div>
      <ul>
        <li
          className={`menu_item presonal_info right_click ${
            currentChoose === 'presonal_info' && isActive ? 'active' : ''
          } `}
        >
          <span>Персональные данные</span>
        </li>
        <li
          className={`menu_item parent_control right_click ${
            currentChoose === 'parent_control' && isActive ? 'active' : ''
          } `}
        >
          <span>Родительский контроль</span>
        </li>
        <li
          className={`menu_item time_area right_click ${
            currentChoose === 'time_area' && isActive ? 'active' : ''
          }  `}
        >
          <span>Временная зона</span>
        </li>

        {/* <span>Время буферизации</span> */}
        <li
          className={`menu_item for_tv right_click ${
            currentChoose === 'for_tv' && isActive ? 'active' : ''
          } `}
        >
          <span>для телевидения: без буфера</span>
        </li>
        {/* <span>Видеонаблюдение</span> */}
        <li
          className={`menu_item info_video right_click ${
            currentChoose === 'info_video' && isActive ? 'active' : ''
          } `}
        >
          <span>Информация об услуге</span>
        </li>
        <li
          className={`menu_item connect right_click ${
            currentChoose === 'connect' && isActive ? 'active' : ''
          } `}
        >
          <span>Подключение аккаунта</span>
        </li>
        <li
          className={`menu_item language right_click ${
            currentChoose === 'language' && isActive ? 'active' : ''
          } `}
        >
          <span>Язык интерфейса</span>
        </li>
      </ul>
    </div>
  )
}

export default ListSettings
