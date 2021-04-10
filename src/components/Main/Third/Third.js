import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFocusSection } from '../../../redux/selectors/mainStateSelector'
import './Third.scss'

export const Third = () => {
    const focusSection = useSelector(getFocusSection)
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        focusSection === 'item-genres' 
        ? setIsFocus(true)
        : setIsFocus(false)
    }, [focusSection])


    return (
        <div className={`focusable${isFocus ? ' focus': ''} item-genres`}>
            Third
        </div>
    )
}