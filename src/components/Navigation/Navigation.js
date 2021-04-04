import React from 'react'
import { useHistory, useParams } from "react-router-dom"
import './Navigation.scss'
import { ReactComponent as TV } from '../../assets/svg/tv.svg'
import { ReactComponent as TVSVG } from '../../assets/svg/tv-monitor.svg'
import { ReactComponent as PlaySVG } from '../../assets/svg/play-button.svg'
import { ReactComponent as SettingSVG } from '../../assets/svg/settings.svg'
import { ReactComponent as InfoSVG } from '../../assets/svg/information.svg'
import { useDispatch, useSelector } from 'react-redux'   
import { setNav } from '../../redux/actions/mainStateActions'
import { getStateNav } from '../../redux/selectors/mainStateSelector'


export const Navigation = () => {
    const {push} = useHistory()
    const stateReduxNav = useSelector(getStateNav)
    const { nav } = useParams();
    const dispatch = useDispatch()


    const timeOut = (refTo) => {
       const time = setTimeout(()=> {
            push(`/${refTo}`)
            clearTimeout(time)
        }, 500)
    }

    const handleRef = (refTo) => {
        switch(refTo) {
            case 'tv': 
                if (nav === refTo) {
                    return
                } else {
                    console.log(nav)
                    dispatch(setNav(refTo))
                    timeOut(refTo)
                }
            case 'records':
                if (nav === refTo) {
                    return
                } else {
                    dispatch(setNav(refTo))
                    timeOut(refTo)
                }
            case 'setup': 
                if (nav === refTo){ 
                    return
                } else {
                    dispatch(setNav(refTo))
                    timeOut(refTo)
                }
            case 'info' : 
                if (nav === refTo) {
                    return
                } else {
                    dispatch(setNav(refTo))
                    timeOut(refTo)
                }
            default: return                
        }
    }


    return (
        <nav className="navigation">
            <TV className="navigation__top-svg" />
            <ul className="navigation__ul">
                <li className="navigation__li">
                    <TVSVG onClick={() => handleRef('tv')} className="navigation__svg" />
                </li>
                <li className="navigation__li">
                    <PlaySVG onClick={() => handleRef('records')} className="navigation__svg" />
                </li>
                <hr/>
                <li className="navigation__li">
                    <SettingSVG onClick={() => handleRef('setup')} className="navigation__svg" />
                </li>
                <li className="navigation__li">
                    <InfoSVG onClick={() => handleRef('info')} className="navigation__svg" /> 
                </li>
            </ul>
        </nav>
    )
}