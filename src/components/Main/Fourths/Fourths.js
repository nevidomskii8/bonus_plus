import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFocusSection } from '../../../redux/selectors/mainStateSelector'
import './Fourth.scss'

export const Fourth = () => {
    const focusSection = useSelector(getFocusSection)
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        focusSection === 'item-genres-detail' 
        ? setIsFocus(true)
        : setIsFocus(false)
    }, [focusSection])


    return (
        <div className={`focusable${isFocus ? ' focus': ''} item-genres-detail`}>
            Fourth
        </div>
    )
}