import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getStateNav } from '../../../redux/selectors/mainStateSelector'
import {FormattedMessage} from 'react-intl';
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
                    <li> <FormattedMessage id="app.tv.everything"/> </li>
                    <li> <FormattedMessage id="app.tv.home"/> </li>
                    <li> <FormattedMessage id="app.tv.sports"/> </li>
                    <li> <FormattedMessage id="app.tv.childrens"/> </li>
                    <li> <FormattedMessage id="app.tv.educational"/></li>
                    <li> <FormattedMessage id="app.tv.musical"/></li>
                    <li> <FormattedMessage id="app.tv.news"/> </li>
                    <li>HD</li>
                </ul>
                <hr/>
                <ul>
                    <li><FormattedMessage id="app.tv.likes"/> </li>
                    <li><FormattedMessage id="app.tv.recorders"/> </li>
                </ul>
            </div>
            <div className="tv-page__list-chanals">
            </div>
            <div className="tv-page__schedule">
            </div>
        </div>
    )

}