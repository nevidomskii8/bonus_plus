import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getStateNav } from '../../../redux/selectors/mainStateSelector'
import './TV_page.scss'

export const TV_Page = () => {
    const stateReduxNav = useSelector(getStateNav)
    const { nav } = useParams();
    const [openTypeOfChanals, setOpenTypeOfChanals] = useState (false)

    
    useEffect(() => {
        setOpenTypeOfChanals(true)
        console.log(nav)
    },[])
    useEffect(() => {
        if (stateReduxNav !== 'tv') {
            setOpenTypeOfChanals(false)
        }
    },[stateReduxNav])

    

    return (
        <div className="tv-page">
            <div className={`tv-page__typeof-chanals${openTypeOfChanals ? '--open': ''}`}>
                <center>
                    <h1>Телевидение</h1>
                    </center>
                <ul>
                    <li>Все</li>
                    <li>Домашние</li>
                    <li>Спортивные</li>
                    <li>Детские</li>
                    <li>Образовательные</li>
                    <li>Музыкальные</li>
                    <li>Новостные</li>
                    <li>HD</li>
                </ul>
                <hr/>
                <ul>
                    <li>Любимые</li>
                    <li>В записи</li>
                </ul>
            </div>
            <div className="tv-page__list-chanals">
            </div>
            <div className="tv-page__schedule">
            </div>
        </div>
    )

}