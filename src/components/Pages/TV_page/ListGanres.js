import React from 'react'
import { FormattedMessage } from 'react-intl';

export const ListGanres = ({ mainRef, handleChooseGenres, openTypeOfChanals, activeListGenres }) => (
    <div className={`tv-page__typeof-chanals${openTypeOfChanals ? '--open' : ''}`}>
        <center>
            <h1>Телевидение</h1>
        </center>
        <ul ref={mainRef} className='focusable'>
            <li
                tabIndex='8'
                onClick={() => handleChooseGenres(7)}
                className={`tv-page_list${activeListGenres === 7 ? '--active' : ''} 7`}
            >
                <FormattedMessage id="app.tv.funny" />
            </li>
            <li
                tabIndex='9'
                onClick={() => handleChooseGenres(3)}
                className={`tv-page_list${activeListGenres === 3 ? '--active' : ''} 3`}
            >
                <FormattedMessage id="app.tv.sports" />
            </li>
            <li
                tabIndex='10'
                onClick={() => handleChooseGenres(4)}
                className={`tv-page_list${activeListGenres === 4 ? '--active' : ''} 4`}
            >
                <FormattedMessage id="app.tv.childrens" />
            </li>
            <li
                tabIndex='11'
                onClick={() => handleChooseGenres(5)}
                className={`tv-page_list${activeListGenres === 5 ? '--active' : ''} 5`}
            >
                <FormattedMessage id="app.tv.educational" />
            </li>
            <li
                tabIndex='12'
                onClick={() => handleChooseGenres(6)}
                className={`tv-page_list${activeListGenres === 6 ? '--active' : ''} 6`}
            >
                <FormattedMessage id="app.tv.musical" />
            </li>
            <li
                tabIndex='13'
                onClick={() => handleChooseGenres(8)}
                className={`tv-page_list${activeListGenres === 8 ? '--active' : ''} 8`}
            >
                <FormattedMessage id="app.tv.movies" />
            </li>
            <li
                tabIndex='14'
                onClick={() => handleChooseGenres(10)}
                className={`tv-page_list${activeListGenres === 10 ? '--active' : ''} 10`}
            >
                <FormattedMessage id="app.tv.news" />
            </li>
            <li
                tabIndex='15'
                onClick={() => handleChooseGenres(9)}
                className={`tv-page_list${activeListGenres === 9 ? '--active' : ''} 9`}
            >
                HD
                    </li>
            <li tabIndex='16'><FormattedMessage id="app.tv.likes" /> </li>
            <li tabIndex='17'><FormattedMessage id="app.tv.recorders" /> </li>
            <li tabIndex='18'><FormattedMessage id="app.tv.users" /> </li>
            <li tabIndex='19'><FormattedMessage id="app.tv.find" /> </li>
        </ul>

        <ul>
        </ul>
    </div>
)