import { useSelector } from 'react-redux'
import { getChooseNav } from '../../../redux/selectors/mainStateSelector'
import './TV_page.scss'
import { Genre } from '../tv/genres/Genre'
import { ChanalGanres } from '../tv/chanalGanres/ChanalGanres'
import { Navigation } from '../../navigation/Navigation'
import { Schedule } from '../tv/schedule/Schedule.js'
import { MovieTypes } from '../movie/movieClass/MovieTypes'
import { Films } from '../movie/films/Films'
import { ListSettings } from '../settings/listSettings/ListSetting'
import { DetailSetting } from '../settings/detailSetting/DetailSetting'

export const TVPage = () => {
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
