import React from 'react'
import './Second.scss'

export const Second = () => {

    return (
        <div className="main-container__second">
            <ul>
                <li className="main-container__second__list focused">Все</li>
                <li className="main-container__second__list">Спортивные</li>
                <li className="main-container__second__list">Позновательные</li>
                <li className="main-container__second__list">Новостные</li>
                <li className="main-container__second__list">Развлекательные</li>
                <li className="main-container__second__list">Музыкальные</li>
                <li className="main-container__second__list">Любимые</li>
                <li className="main-container__second__list">В записи</li>
                <li className="main-container__second__list">Пользовательские</li>
                <li className="main-container__second__list">Поиск</li>
            </ul>
        </div>
    )
}