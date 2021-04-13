import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getChanals, getFocusSection, getStateNav } from '../../../redux/selectors/mainStateSelector'
import './TV_page.scss'
import { Genre } from './Genre'
import { ListGanres } from './ListGanres'
import { Schedule } from './Schedule'
import { Navigation } from '../../Navigation/Navigation'


export const TV_Page = () => {
    const focusSection = useSelector(getFocusSection)

    return (
        <>
            <Navigation />
            <div className={`tv-page__list-genres focusable ${focusSection === 'tv-page__list-genres' ? 'focused' : ''}`}>
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