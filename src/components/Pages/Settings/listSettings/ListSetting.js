import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFocusSection } from '../../../../redux/actions/mainStateActions'
import {
  getFocusActive,
  getFocusSection,
} from '../../../../redux/selectors/mainStateSelector'

export const ListSettings = () => {
  const focusSection = useSelector(getFocusSection)
  const dispatch = useDispatch()
  const active = useSelector(getFocusActive)
  const [isActive, setIsActive] = useState(false)
  const [currentChoose, setCurrentChoose] = useState('collections')

  useEffect(() => {
    focusSection === 'setup' ? setIsActive(true) : setIsActive(false)
  }, [focusSection])

  useEffect(() => {
    isActive && setCurrentChoose(active)
  }, [active])

  useEffect(() => {
    setIsActive(true)
    setCurrentChoose('collections')
    dispatch(setFocusSection('setting'))
  }, [])

  return (
    <div
      className={`setting focusable ${
        focusSection === 'setting' ? 'focused' : ''
      }`}
    >
      <div class="title"> Настройки </div>
      <ul class="menu settings_type_list">
        <li settings_type="personal" class="menu_item right_click">
          <span>Персональные данные</span>
        </li>
        <li settings_type="parents" class="menu_item right_click">
          <span>Родительский контроль</span>
        </li>
        <li settings_type="time" class="menu_item right_click active">
          <span>Временная зона</span>
        </li>
        <li class="menu_item no_active">
          <span>Время буферизации</span>
        </li>
        <li settings_type="tv_buffer" class="menu_item right_click">
          <span>для телевидения: без буфера</span>
        </li>
        <li class="menu_item no_active">
          <span>Видеонаблюдение</span>
        </li>
        <li settings_type="spec_info" class="menu_item right_click">
          <span>Информация об услуге</span>
        </li>
        <li settings_type="spec_connect" class="menu_item right_click">
          <span>Подключение аккаунта</span>
        </li>
      </ul>
    </div>
  )
}
