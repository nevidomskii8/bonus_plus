import { useEffect, useState } from 'react'
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
            <img src="http://mag.bonus-tv.tv/chicons/x128/46.png" />

            <ul className={''}>
                <li className='schedule__li'>
                    <time>11-00</time> <span>Хиты и эмоции</span>
                </li>
                <li className='schedule__li'>
                    <time>11-00</time> <span>Хиты и эмоции</span>
                </li>
                <li className='schedule__li'>
                    <time>11-00</time> <span>Хиты и эмоции</span>
                </li>
                <li className='schedule__li'>
                    <time>11-00</time> <span>Хиты и эмоции</span>
                </li>
                <li className='schedule__li'>
                    <time>11-00</time> <span>Хиты и эмоции</span>
                </li>
                <li className='schedule__li'>
                    <time>11-00</time> <span>Хиты и эмоции</span>
                </li>
            </ul>
        </div>
    )
}