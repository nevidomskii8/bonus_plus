import { useSelector } from 'react-redux';
import { getChooseNav, getFocusSection } from '../../../redux/selectors/mainStateSelector';
import './TV_page.scss';
import { Genre } from '../Genres/Genre';
import { ListGanres } from '../ListGanres/ListGanres';
import { Navigation } from '../../Navigation/Navigation';
import { Schedule } from '../Schedule/Schedule';
import { MovieTypes } from '../MovieClass/MovieTypes';
import { Films } from '../Films/Films';

export const TV_Page = () => {
  const focusSection = useSelector(getFocusSection);
  const menu = useSelector(getChooseNav);

  return (
    <div className="tv-page">
      <Navigation />
      {menu === 'tv' && <ListGanres />}
      {menu === 'tv' && <Genre />}
      {menu === 'tv' && <Schedule />}

      {menu === 'movie-types' && <MovieTypes />}
      {menu === 'movie-types' && <Films />}
    </div>
  );
};
