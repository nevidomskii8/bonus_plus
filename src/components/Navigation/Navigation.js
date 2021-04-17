import { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/menu-logo.png'
import { ReactComponent as TVSVG } from '../../assets/svg/tv-monitor.svg'
import { ReactComponent as PlaySVG } from '../../assets/svg/play-button.svg'
import { ReactComponent as Serialize } from '../../assets/svg/serialize.svg'
import { ReactComponent as SettingSVG } from '../../assets/svg/settings.svg'
import { ReactComponent as InfoSVG } from '../../assets/svg/information.svg'
import { ReactComponent as PayCard } from '../../assets/svg/pay-card.svg'
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg'
import { Context } from '../../Wrapper/Wrapper'

import './Navigation.scss'
import { useSelector } from 'react-redux'
import { getFocusActive, getFocusSection } from '../../redux/selectors/mainStateSelector'


export const Navigation = () => {
    const context = useContext(Context);
    const focusSection = useSelector(getFocusSection)
    const active = useSelector(getFocusActive)
    const [isActive, setIsActive] = useState(false)
    const [currentChoose, setCurrentChoose] = useState('tv')

    useEffect(() => {
        focusSection === 'navigation' ? setIsActive(true) : setIsActive(false)
    }, [focusSection])

    useEffect(() => {
        isActive && setCurrentChoose(active)
    }, [active])

    return (
        <div className={`navigation focusable ${focusSection === 'navigation' ? 'focused' : ''}`}>
            <div className="navigation__logo"/>
            {/* <img className='navigation__logo' src={logo} alt='logo' /> */}
            <ul className={`menu`} >
                <li className={`item-nav tv ${currentChoose === 'tv' && isActive ? 'active' : ''}`} >
                    <TVSVG className="navigation__svg navigation__svg--tv" />
                    <span className={`${focusSection === 'navigation' ? 'show' : 'hidden'}`}>Телевиденье</span>
                </li>
                <li className={`item-nav records ${currentChoose === 'records' && isActive ? 'active' : ''}`}>
                    <PlaySVG className="navigation__svg navigation__svg--records" />
                    <span className={`${focusSection === 'navigation' ? 'show' : 'hidden'}`}>Кино</span>
                </li>
                <li className={`item-nav serialize ${currentChoose === 'serialize' && isActive ? 'active' : ''}`}>
                    <Serialize className="navigation__svg navigation__svg--records" />
                    <span className={`${focusSection === 'navigation' ? 'show' : 'hidden'}`}>Сериалы</span>
                </li>
                <li className={`item-nav setup ${currentChoose === 'setup' && isActive ? 'active' : ''}`}>
                    <SettingSVG className="navigation__svg navigation__svg--setup" />
                    <span className={`${focusSection === 'navigation' ? 'show' : 'hidden'}`}>Настройки</span>
                </li>
                <li className={`item-nav paycard ${currentChoose === 'paycard' && isActive ? 'active' : ''}`}>
                    <PayCard className="navigation__svg navigation__svg--info" />
                    <span className={`${focusSection === 'navigation' ? 'show' : 'hidden'}`}>Оплата услуг</span>
                </li>
                <li className={`item-nav youtube ${currentChoose === 'youtube' && isActive ? 'active' : ''}`}>
                    <Youtube className="navigation__svg navigation__svg--info" />
                    <span className={`${focusSection === 'navigation' ? 'show' : 'hidden'}`}>Youtube</span>
                </li>
                <li className={`item-nav info ${currentChoose === 'info' && isActive ? 'active' : ''}`}>
                    <InfoSVG className="navigation__svg navigation__svg--info" />
                    <span className={`${focusSection === 'navigation' ? 'show' : 'hidden'}`}>Радио</span>
                </li>
            </ul>
            <select className="navigation__lang" value={context.locale} onChange={context.selectLanguage}>
                <option value='ru'>Русский</option>
                <option value='uk'>Украинский</option>
            </select>
        </div>
    )
}
