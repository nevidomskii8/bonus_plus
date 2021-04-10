import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFocusSection } from '../../../redux/selectors/mainStateSelector'
import './Second.scss'

export const Second = () => {
    const focusSection = useSelector(getFocusSection)
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        focusSection === 'nav-genres'
        ? setIsFocus(true)
        : setIsFocus(false)
    }, [focusSection])

    return (
        <div className={`focusable${isFocus ? ' focus': ''} nav-genres`}>
            <ul>
                <li className="focusable__list">Все</li>
                <li className="focusable__list">Спортивные</li>
                <li className="focusable__list">Позновательные</li>
                <li className="focusable__list">Новостные</li>
                <li className="focusable__list">Развлекательные</li>
                <li className="focusable__list">Музыкальные</li>
                <li className="focusable__list">Любимые</li>
                <li className="focusable__list">В записи</li>
                <li className="focusable__list">Пользовательские</li>
                <li className="focusable__list">Поиск</li>
            </ul>
        </div>
    )
}