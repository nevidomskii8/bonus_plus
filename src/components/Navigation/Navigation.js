import React, { useContext, useEffect, useRef } from 'react'
import { useHistory, useParams } from "react-router-dom"
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
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

import './Navigation.scss'
import useInitialfocus from './helpers/helpers'


export const Navigation = () => {
    const { push } = useHistory()
    const { nav } = useParams();
    const dispatch = useDispatch()
    const context = useContext(Context);
    const mainRef = useRef(null);

    const timeOut = (refTo) => {
        const time = setTimeout(() => {
            push(`/${refTo}`)
            clearTimeout(time)
        }, 500)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            console.dir(document.activeElement)
            console.log('arrow')
            window.tabIndex++
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useInitialfocus(mainRef, 'Hello World');

    const handleRef = (refTo) => {
        switch (refTo) {
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
                if (nav === refTo) {
                    return
                } else {
                    dispatch(setNav(refTo))
                    timeOut(refTo)
                }
            case 'info':
                if (nav === refTo) {
                    return
                } else {
                    dispatch(setNav(refTo))
                    timeOut(refTo)
                }
            default: return
        }
    }

    function handleSelection(value, event) {
        if (value.props.className === 'navigation__svg navigation__svg--tv') {
            return handleRef('tv')
        } else if (value.props.className === 'navigation__svg navigation__svg--records') {
            return handleRef('records')
        } else if (value.props.className === 'navigation__svg navigation__svg--setup') {
            return handleRef('setup')
        } else if (value.props.className === 'navigation__svg navigation__svg--info')
            return handleRef('info')
    }

    return (
        // <Wrapper onSelection={handleSelection} >
        <nav className="navigation">
            {/* <Button > */}
            <TV className="navigation__top-svg" />
            {/* </Button > */}
            <ul className="navigation__ul">
                {/* <Menu> */}

                <li ref={mainRef} tabIndex="1" className="navigation__li" >
                    {/* <MenuItem> */}
                    <TVSVG onClick={() => handleRef('tv')} onFocus={() => console.log('hello)))')} className="navigation__svg navigation__svg--tv" />
                    {/* </MenuItem> */}
                </li>
                <li tabIndex="2" className="navigation__li">
                    <PlaySVG onClick={() => handleRef('records')} className="navigation__svg navigation__svg--records" />
                    {/* <MenuItem>
                            </MenuItem> */}
                </li>
                <li tabIndex="3" className="navigation__li">
                    <Serialize onClick={() => handleRef('records')} className="navigation__svg navigation__svg--records" />
                    {/* <MenuItem> */}
                    {/* </MenuItem> */}
                </li>
                <hr />
                <li tabIndex="4" className="navigation__li">
                    <SettingSVG onClick={() => handleRef('setup')} className="navigation__svg navigation__svg--setup" />
                    {/* <MenuItem>
                            </MenuItem> */}
                </li>
                <li tabIndex="5" className="navigation__li">
                    <InfoSVG onClick={() => handleRef('info')} className="navigation__svg navigation__svg--info" />
                    {/* <MenuItem>
                            </MenuItem> */}
                </li>
                <li tabIndex="6" className="navigation__li">
                    <PayCard onClick={() => handleRef('info')} className="navigation__svg navigation__svg--info" />
                    {/* <MenuItem>
                            </MenuItem> */}
                </li>
                <li tabIndex="7" className="navigation__li">
                    <Youtube onClick={() => handleRef('info')} className="navigation__svg navigation__svg--info" />
                    {/* <MenuItem>
                            </MenuItem> */}
                </li>
                {/* </Menu> */}
            </ul>
            <select className="navigation__lang" value={context.locale} onChange={context.selectLanguage}>
                <option value='ru'>Русский</option>
                <option value='uk'>Украинский</option>
            </select>
        </nav >
        // </Wrapper >
    )
}
