import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFocusSection } from '../../../redux/selectors/mainStateSelector'
import './Schedule.scss'

export const Schedule = () => {
    const focusSection = useSelector(getFocusSection)

    const [active, setActive] = useState(false)
    useEffect(() => {
        focusSection === 'menu-tv' ? setActive(true) : setActive(false)
    }, [focusSection])


    return (
        <div className={`schedule focusable ${focusSection === 'schedule' ? 'focused' : ''}`}>
            <ul className={`schedule`}>
                <span>здесь будет расписание</span>
                {/* {genres.genres.map((item, i) => <li tabIndex={`${20 + i}`} key={item.id}><i> {i + 1} </i> &nbsp; <span> {item.ch_altname} </span>   &#x20;</li>)} */}
            </ul>
        </div>
    )
}