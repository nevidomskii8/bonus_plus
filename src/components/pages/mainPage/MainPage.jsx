import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { getChooseNav } from '../../../redux/selectors/mainStateSelector'
import { Ring } from 'react-awesome-spinners'
import './MainPage.scss'

const Genre = lazy(() => import('../tv/genres/Genre'))
const ChanalGanres = lazy(() => import('../tv/chanalGanres/ChanalGanres'))
const Navigation = lazy(() => import('../../navigation/Navigation'))
const Schedule = lazy(() => import('../tv/schedule/Schedule.js'))
const MovieTypes = lazy(() => import('../movie/movieClass/MovieTypes'))
const Films = lazy(() => import('../movie/films/Films'))
const ListSettings = lazy(() => import('../settings/listSettings/ListSetting'))
const DetailSetting = lazy(() =>
  import('../settings/detailSetting/DetailSetting'),
)

const renderLoader = () => <Ring size={300} />

export const TVPage = () => {
  const menu = useSelector(getChooseNav)

  return (
    <div className="tv-page">
      <Suspense fallback={renderLoader()}>
        <Navigation />
        {menu === 'tv' && <ChanalGanres />}
        {menu === 'tv' && <Genre />}
        {menu === 'tv' && <Schedule />}

        {menu === 'movie-types' && <MovieTypes />}
        {menu === 'movie-types' && <Films />}

        {menu === 'setup' && <ListSettings />}
        {menu === 'setup' && <DetailSetting />}
      </Suspense>
    </div>
  )
}
