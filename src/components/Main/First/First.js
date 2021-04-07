import React, { useEffect, useRef } from 'react'
import './First.scss'

export const First = () => {
    const classRef = useRef(null)

    useEffect(() => {

    }, [])


    return (
        <div className="main-container__first active">
            <ul>
                <li className="main-container__first__list focused">TV</li>
                <li className="main-container__first__list">Play</li>
                <li className="main-container__first__list">Serialaze</li>
                <li className="main-container__first__list">Record</li>
                <li className="main-container__first__list">Setup</li>
                <li className="main-container__first__list">Info</li>
                <li className="main-container__first__list">Youtube</li>
                <li className="main-container__first__list">PayCard</li>
            </ul>
        </div>
    )
}