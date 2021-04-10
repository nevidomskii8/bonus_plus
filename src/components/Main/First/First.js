import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFocusActive, getFocusSection } from '../../../redux/selectors/mainStateSelector'
import './First.scss'

export const First = () => {
    const focusSection = useSelector(getFocusSection)
    const focusActive = useSelector(getFocusActive)
    const [isFocus, setIsFocus] = useState(false)
    const [stateActive, setStateActive] = useState('tv')

    useEffect(() => {
        focusSection === 'nav-menu'
            ? setIsFocus(true)
            : setIsFocus(false)
            setStateActive(focusActive)            
        
        }, [focusSection,focusActive])
        
    return (
        <div className={`focusable${isFocus ? ' focus' : ''} nav-menu`}>
            <ul>
                <li className={`tv${stateActive === 'tv' ? ' active': ''}`}>TV</li>
                <li className={`play${stateActive === 'play' ? ' active': ''}`}>Play</li>
                <li className={`serialaze${stateActive === 'serialaze' ? ' active': ''}`}>Serialaze</li>
                <li className={`record${stateActive === 'record' ? ' active': ''}`}>Record</li>
                <li className={`setup${stateActive === 'setup' ? ' active': ''}`}>Setup</li>
                <li className={`info${stateActive === 'info' ? ' active': ''}`}>Info</li>
                <li className={`youtube${stateActive === 'youtube' ? ' active': ''}`}>Youtube</li>
                <li className={`paycard${stateActive === 'paycard' ? ' active': ''}`}>PayCard</li>
            </ul>
        </div>
    )
}