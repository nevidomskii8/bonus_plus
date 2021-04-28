import { useSelector } from 'react-redux'
import { getChooseNav } from '../../../redux/selectors/mainStateSelector'
import './TV_page.scss'
import { Genre } from '../tv/Genres/Genre'
import { ChanalGanres } from '../tv/chanalGanres/ChanalGanres'
import { Navigation } from '../../Navigation/Navigation'
import { Schedule } from '../tv/Schedule/Schedule'
import { MovieTypes } from '../MovieClass/MovieTypes'
import { Films } from '../Films/Films'
import { ListSettings } from '../Settings/listSettings/ListSetting'
import { DetailSetting } from '../Settings/detailSetting/DetailSetting'

export const TV_Page = () => {
  const menu = useSelector(getChooseNav)

  return (
    <div className="tv-page">
      <Navigation />
      {menu === 'tv' && <ChanalGanres />}
      {menu === 'tv' && <Genre />}
      {menu === 'tv' && <Schedule />}

      {menu === 'movie-types' && <MovieTypes />}
      {menu === 'movie-types' && <Films />}

      {menu === 'setup' && <ListSettings />}
      {menu === 'setup' && <DetailSetting />}
    </div>
  )
}
