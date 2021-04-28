import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  getFocusActive,
  getFocusSection,
  getScheduleState,
  getStateCarusel,
} from '../../../../redux/selectors/mainStateSelector'
import './Schedule.scss'

export const Schedule = () => {
  const focusSection = useSelector(getFocusSection)
  const active = useSelector(getFocusActive)
  const [stateActive, setStateActive] = useState(null)

  const chanalName = useSelector(getScheduleState)
  const [focusActive, setFocusActive] = useState(false)

  const defineState = () => {
    setFocusActive(true)
    !stateActive && setStateActive('id=1')
  }

  useEffect(() => {
    focusSection === 'schedule' ? defineState() : setFocusActive(false)
  }, [focusSection])

  useEffect(() => {
    focusActive && setStateActive(active)
  }, [active])

  if (!chanalName) {
    return null
  }
  return (
    <div
      className={`schedule focusable ${
        focusSection === 'schedule' ? 'focused' : ''
      }`}
    >
      <div className="schedule__head">
        {' '}
        <img src="http://mag.bonus-tv.tv/chicons/x128/46.png" alt="" />{' '}
        <h3>{chanalName}</h3>
      </div>
      <div className="schedule__title">
        <span>передачи за 1 мая</span>
      </div>
      <ul className="schedule__ul">
        <li
          className={`schedule__li id=1 ${
            stateActive === 'id=1' ? 'active' : ''
          }`}   
        >
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li
          className={`schedule__li id=2 ${
            stateActive === 'id=2' ? 'active' : ''
          }`}
        >
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li
          className={`schedule__li id=3 ${
            stateActive === 'id=3' ? 'active' : ''
          }`}
        >
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li
          className={`schedule__li id=4 ${
            stateActive === 'id=4' ? 'active' : ''
          }`}
        >
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li
          className={`schedule__li id=5 ${
            stateActive === 'id=5' ? 'active' : ''
          }`}
        >
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li
          className={`schedule__li id=6 ${
            stateActive === 'id=6' ? 'active' : ''
          }`}
        >
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
      </ul>
    </div>
  )
}
