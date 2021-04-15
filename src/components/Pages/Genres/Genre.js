import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getChanals, getFocusActive, getFocusSection } from '../../../redux/selectors/mainStateSelector'
import './Genres.scss'

export const Genre = () => {
    const focusSection = useSelector(getFocusSection)
    const active = useSelector(getFocusActive)
    const chanals = useSelector(getChanals)
    const focusRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const [currentChoose, setCurrentChoose] = useState(chanals[0].id)
    const [stateChanals, setStateChanals]= useState(null)

    const handleAtive = () => {
        setIsActive(true)
        setStateChanals(chanals)
    }

    const setOfActive = () => {
        setIsActive(false)
    }

    useEffect(() => {
        focusSection === 'genres' ? handleAtive() : setOfActive()
    }, [focusSection])
    
    useEffect(() => {
        focusSection === 'list-genres' &&  setStateChanals([...chanals.filter(chan => chan.genres[0].includes(+active))])
        isActive && setCurrentChoose(active)
        isActive && focusRef.current.focus()
    }, [active])

    return (
        <div className={`genres focusable ${focusSection === 'genres' ? 'focused' : ''}`}>
            <ul tabIndex="0">
                {stateChanals?.map((item, i) =>
                    <li tabIndex='-1' 
                        ref={+currentChoose === +item.id ? focusRef: null}
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