import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getChanals, getStateNav } from '../../../redux/selectors/mainStateSelector'
import './TV_page.scss'
import { Genre } from './Genre/Genre'
import { ListGanres } from './ListGanres'


export const TV_Page = () => {
    const stateReduxNav = useSelector(getStateNav)
    const chanals = useSelector(getChanals)
    const [stateGenres, setStateGenres] = useState([])
    const [activeListGenres, setActiveListGenres] = useState(7)
    const [openTypeOfChanals, setOpenTypeOfChanals] = useState(false)
    const mainRef = useRef(null)

    const handleChooseGenres = (genres) => {
        setStateGenres(() => chanals.filter(item => item.genres[0].includes(genres)))
    }

    const handleKeyDownGenres = (event) => {
        if (event.key === 'ArrowDown') {
            if (document.activeElement.tabIndex !== 19) {
                let counter = 0
                for (let child in mainRef.current.children) {
                    counter++
                    if (mainRef.current.children[child].tabIndex === document.activeElement.tabIndex) {
                        console.log(mainRef.current.children[counter]?.className.split(' ')[1])
                        const genresFromClass = mainRef.current.children[counter]?.className.split(' ')[1]
                        return mainRef.current.children[counter].focus(genresFromClass && handleChooseGenres(+genresFromClass))
                    }
                }
            }
            return mainRef.current.children[0].focus()
        }

        if (event.key === 'ArrowUp') {
            if (document.activeElement.tabIndex !== 8) {
                let counter = 0
                for (let child in mainRef.current.children) {
                    counter++
                    if (mainRef.current.children[child].tabIndex === document.activeElement.tabIndex) {
                        console.log(mainRef.current.children[counter]?.className.split(' ')[1])
                        const genresFromClass = mainRef.current.children[counter - 2]?.className.split(' ')[1]
                        return mainRef.current.children[counter - 2].focus(genresFromClass && handleChooseGenres(+genresFromClass))
                    }
                }
            }
            return mainRef.current.children[11].focus()
        }
    }

    useEffect(() => {
        setOpenTypeOfChanals(true)
        window.addEventListener('keydown', handleKeyDownGenres)
        mainRef.current.children[0].focus()
        return () => {
            window.removeEventListener('keydown', handleKeyDownGenres);
        };
    }, [])

    useEffect(() => {
        setStateGenres(chanals)
    }, [chanals])

    // useEffect(() => {
    //     // if (stateReduxNav !== 'tv') { setOpenTypeOfChanals(false) }
    // }, [stateReduxNav])

    return (
        <div className="tv-page">
            <ListGanres
                mainRef={mainRef}
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