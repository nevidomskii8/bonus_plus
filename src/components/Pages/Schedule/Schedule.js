import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFocusSection, getScheduleState } from '../../../redux/selectors/mainStateSelector';
import './Schedule.scss';

export const Schedule = () => {
  const focusSection = useSelector(getFocusSection);
  // пока что передаем имя канала !!
  const chanalName = useSelector(getScheduleState);
  const [active, setActive] = useState(false);

  useEffect(() => {
    focusSection === 'menu-tv' ? setActive(true) : setActive(false);
  }, [focusSection]);

  if (!chanalName) {
    return null;
  }
  return (
    <div className={`schedule focusable ${focusSection === 'schedule' ? 'focused' : ''}`}>
      <img src="http://mag.bonus-tv.tv/chicons/x128/46.png" />
      <h3>{chanalName}</h3>
      <ul className={''}>
        <li className="schedule__li">
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li className="schedule__li">
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li className="schedule__li">
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li className="schedule__li">
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li className="schedule__li">
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
        <li className="schedule__li">
          <time>11-00</time> <span>Хиты и эмоции</span>
        </li>
      </ul>
    </div>
  );
};
