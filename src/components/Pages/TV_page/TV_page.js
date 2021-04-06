import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getChanals, getStateNav } from '../../../redux/selectors/mainStateSelector'
import './TV_page.scss'
import { Genre } from './Genre/Genre';
import { ListGanres } from './ListGanres';

export const TV_Page = () => {
    const stateReduxNav = useSelector(getStateNav)
    const chanals = useSelector(getChanals)
    const [stateGenres, setStateGenres] = useState([])
    const [activeListGenres, setActiveListGenres] = useState(7)
    const [openTypeOfChanals, setOpenTypeOfChanals] = useState(false)


    useEffect(() => {
        setOpenTypeOfChanals(true)
    }, [])

    useEffect(() => {
        setStateGenres(chanals)
    }, [chanals])

    useEffect(() => {
        if (stateReduxNav !== 'tv') {
            setOpenTypeOfChanals(false)
        }
    }, [stateReduxNav])


    const handleChooseGenres = (genres) => {

        setStateGenres(chanals.filter(item => item.genres[0].includes(genres)))
    }

    return (
        <div className="tv-page">
            <ListGanres
                handleChooseGenres={handleChooseGenres}
                openTypeOfChanals={openTypeOfChanals}
                activeListGenres={activeListGenres}
            />
            <div className="tv-page__genres">
                {stateGenres && <Genre genres={stateGenres} />}
            </div>
            <div className="tv-page__schedule">
            </div>
        </div >
    )

}