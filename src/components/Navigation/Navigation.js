import React, { Children, useContext, useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom"
import { ReactComponent as TV } from '../../assets/svg/tv.svg'
import { ReactComponent as TVSVG } from '../../assets/svg/tv-monitor.svg'
import { ReactComponent as PlaySVG } from '../../assets/svg/play-button.svg'
import { ReactComponent as Serialize } from '../../assets/svg/serialize.svg'
import { ReactComponent as SettingSVG } from '../../assets/svg/settings.svg'
import { ReactComponent as InfoSVG } from '../../assets/svg/information.svg'
import { ReactComponent as PayCard } from '../../assets/svg/pay-card.svg'
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg'
import { useDispatch } from 'react-redux'
import { setNav } from '../../redux/actions/mainStateActions'
import { Context } from '../../Wrapper/Wrapper'

import './Navigation.scss'
import { useInitialfocus } from './useFocus'


export const Navigation = () => {
    const { push } = useHistory()
    const dispatch = useDispatch()
    const context = useContext(Context);
    const mainRef = useRef(null);
    const refUl = useRef(null)
    const timeOut = (refTo) => {
        const time = setTimeout(() => {
            push(`/${refTo}`)
            clearTimeout(time)
        }, 500)
    }

    const handleRef = (refTo) => {
        switch (refTo) {
            case 'tv':
                dispatch(setNav(refTo))
                timeOut(refTo)
            case 'records':
                dispatch(setNav(refTo))
                timeOut(refTo)
            case 'setup':
                dispatch(setNav(refTo))
                timeOut(refTo)
            case 'info':
                dispatch(setNav(refTo))
                timeOut(refTo)
            default: return
        }
    }

    const handleKeyDown = (event) => {
        const focusabled = document.querySelectorAll('.focusable')
        const focused = document.querySelector('.focused')
        if (event.key === 'ArrowDown') {
            if (focused.nextElementSibling) {
                focused.classList.remove('focused')
                return focused.nextElementSibling.classList.add('focused')
            }
        }

        if (event.key === 'ArrowUp') {
            if (focused.previousElementSibling) {
                focused.classList.remove('focused')
                return focused.previousElementSibling.classList.add('focused')
            }
        }

        if (event.key === 'Enter') {
            console.log(focused.parentNode.classList)
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        mainRef.current.classList.add('focused')
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    useInitialfocus(mainRef)



    return (
        <nav className="navigation">
            <TV className="navigation__top-svg" />
            <ul className="navigation__ul focusable" ref={refUl}>
                <li ref={mainRef} tabIndex="1" className="navigation__li tv" >
                    <TVSVG onClick={() => handleRef('tv')} onFocus={() => console.log('hello)))')} className="navigation__svg navigation__svg--tv" />
                </li>
                <li tabIndex="2" className="navigation__li records">
                    <PlaySVG onClick={() => handleRef('records')} className="navigation__svg navigation__svg--records" />
                </li>
                <li tabIndex="3" className="navigation__li records">
                    <Serialize onClick={() => handleRef('records')} className="navigation__svg navigation__svg--records" />
                </li>
                <li tabIndex="4" className="navigation__li setup">
                    <SettingSVG onClick={() => handleRef('setup')} className="navigation__svg navigation__svg--setup" />
                </li>
                <li tabIndex="5" className="navigation__li info">
                    <InfoSVG onClick={() => handleRef('info')} className="navigation__svg navigation__svg--info" />
                </li>
                <li tabIndex="6" className="navigation__li info">
                    <PayCard onClick={() => handleRef('info')} className="navigation__svg navigation__svg--info" />
                </li>
                <li tabIndex="7" className="navigation__li info">
                    <Youtube onClick={() => handleRef('info')} className="navigation__svg navigation__svg--info" />
                </li>
            </ul>
            <select className="navigation__lang" value={context.locale} onChange={context.selectLanguage}>
                <option value='ru'>Русский</option>
                <option value='uk'>Украинский</option>
            </select>
        </nav >
    )
}
