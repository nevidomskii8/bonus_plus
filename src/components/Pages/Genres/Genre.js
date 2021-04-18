import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setScheduleState } from '../../../redux/actions/mainStateActions'
import { getChanals, getChooseGenre, getFocusActive, getFocusSection } from '../../../redux/selectors/mainStateSelector'
import './Genres.scss'


export const Genre = () => {
    const focusSection = useSelector(getFocusSection)
    const active = useSelector(getFocusActive)
    const chanals = useSelector(getChanals)
    const defineGanre = useSelector(getChooseGenre)
    const dispatch = useDispatch()
    const focusRef = useRef(null)
    const ulRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const [stateChanals, setStateChanals] = useState(null)
    const [currentChoose, setCurrentChoose] = useState()

    useEffect(() => {
        setStateChanals([...chanals.filter(chan => chan.genres[0].includes(+defineGanre))])
    }, [defineGanre])

    const logger = () => {
        setCurrentChoose(+stateChanals[0].id)
         dispatch(setScheduleState(stateChanals[0].ch_altname))
    }

    useEffect(() => {
        stateChanals && stateChanals.length > 0 && logger()
    }, [stateChanals])

    const handleAtive = () => {
        setIsActive(true)
        !defineGanre && setStateChanals(chanals)
    }

    useEffect(() => {
        focusSection === 'genres' ? handleAtive() : setIsActive(false)
    }, [focusSection])

    useEffect(() => {
        isActive && setCurrentChoose(active)

        if (isActive) {
            focusRef.current.nextSibling              
            ? dispatch(setScheduleState(focusRef.current.nextSibling.innerText.split(' ').slice(1).join(' ')))            
            :  dispatch(setScheduleState(stateChanals[0].ch_altname))
            ulRef.current.scrollTo(0, focusRef.current.offsetTop)
        }
    }, [active])

    return (
        <div ref={ulRef} className={`genres focusable ${focusSection === 'genres' ? 'focused' : ''}`}>
            <ul tabIndex="0" className="gentes__ul">
                {stateChanals?.map((item, i) =>
                    <li ref={+currentChoose === +item.id ? focusRef : null}
                        className={`tv-page_chanal ${item.id} 
                        ${(+currentChoose === +item.id && isActive) ? 'active' : ''}`}
                        key={item.id}
                    >
                        <i> {i + 1} </i> &nbsp; <span> {item.ch_altname} </span> &#x20;
                    </li>)}
            </ul>
        </div>
    )
}