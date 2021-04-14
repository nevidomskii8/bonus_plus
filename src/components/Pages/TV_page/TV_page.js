import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getChanals, getFocusSection, getStateNav } from '../../../redux/selectors/mainStateSelector'
import './TV_page.scss'
import { Genre } from './Genres/Genre'
import { ListGanres } from './ListGanres/ListGanres'
import { Navigation } from '../../Navigation/Navigation'
import { Schedule } from './Schedule/Schedule'


export const TV_Page = () => {
    const focusSection = useSelector(getFocusSection)

    return (
        <>
            <Navigation />
            <div className={`tv-page__list-genres focusable ${focusSection === 'tv-page__list-genres' ? 'focused' : ''}`}>
                <center>
                    <h1>Телевидение</h1>
                </center>
                <ListGanres />
            </div>
            <div className={`tv-page__genres focusable ${focusSection === 'tv-page__genres' ? 'focused' : ''}`}>
                <Genre />
            </div>
            <div className={`tv-page__schedule focusable ${focusSection === 'tv-page__schedule' ? 'focused' : ''}`}>
                <Schedule />
            </div>
        </ >
    )

}