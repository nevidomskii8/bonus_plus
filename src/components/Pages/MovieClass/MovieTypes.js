import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFocusSection } from '../../../redux/actions/mainStateActions';
import { getFocusActive, getFocusSection } from '../../../redux/selectors/mainStateSelector';
import './MovieTypes.scss';

export const MovieTypes = () => {
  const focusSection = useSelector(getFocusSection);
  const dispatch = useDispatch();
  const active = useSelector(getFocusActive);
  const [isActive, setIsActive] = useState(false);
  const [currentChoose, setCurrentChoose] = useState('collections');

  useEffect(() => {
    focusSection === 'movies-types' ? setIsActive(true) : setIsActive(false);
  }, [focusSection]);

  useEffect(() => {
    isActive && setCurrentChoose(active);
  }, [active]);

  useEffect(() => {
    setIsActive(true);
    setCurrentChoose('collections');
    dispatch(setFocusSection('movies-types'));
  }, []);

  return (
    <div className={`movies-types focusable ${focusSection === 'movies-types' ? 'focused' : ''}`}>
      <h2>Кино</h2>
      <ul>
        <li
          className={`movies-types__list collections ${
            currentChoose === 'collections' && isActive ? 'active' : ''
          }`}
        >
          {/* <FormattedMessage id="app.tv.funny" /> */}
          Коллекции
        </li>
        <li
          className={`movies-types__list shows ${
            currentChoose === 'shows' && isActive ? 'active' : ''
          }`}
        >
          Развлекательные шоу
          {/* <FormattedMessage id="app.tv.sports" /> */}
        </li>
        <li
          className={`movies-types__list musical ${
            currentChoose === 'musical' && isActive ? 'active' : ''
          }`}
        >
          Музыкальные
          {/* <FormattedMessage id="app.tv.childrens" /> */}
        </li>
        <li
          className={`movies-types__list movies ${
            currentChoose === 'movies' && isActive ? 'active' : ''
          }`}
        >
          Мультфильмы
          {/* <FormattedMessage id="app.tv.educational" /> */}
        </li>
        <li
          className={`movies-types__list debts ${
            currentChoose === 'debts' && isActive ? 'active' : ''
          }`}
        >
          Отложеные
          {/* <FormattedMessage id="app.tv.musical" /> */}
        </li>
        <li
          className={`movies-types__list foun ${
            currentChoose === 'foun' && isActive ? 'active' : ''
          }`}
        >
          Поиск
          {/* <FormattedMessage id="app.tv.movies" /> */}
        </li>
      </ul>
    </div>
  );
};
