import React from 'react'
import { FormattedMessage } from 'react-intl';

export const ListGanres = ({ handleChooseGenres, openTypeOfChanals, activeListGenres }) => (
    <div className={`tv-page__typeof-chanals${openTypeOfChanals ? '--open' : ''}`}>
        <center>
            <h1>Телевидение</h1>
        </center>
        <ul>
            <li
                onClick={() => handleChooseGenres(7)}
                className={`tv-page_list${activeListGenres === 7 ? '--active' : ''}`}
            >
                <FormattedMessage id="app.tv.funny" />
            </li>
            <li
                onClick={() => handleChooseGenres(3)}
                className={`tv-page_list${activeListGenres === 3 ? '--active' : ''}`}
            >
                <FormattedMessage id="app.tv.sports" />
            </li>
            <li
                onClick={() => handleChooseGenres(4)}
                className={`tv-page_list${activeListGenres === 4 ? '--active' : ''}`}
            >
                <FormattedMessage id="app.tv.childrens" />
            </li>
            <li
                onClick={() => handleChooseGenres(5)}
                className={`tv-page_list${activeListGenres === 5 ? '--active' : ''}`}
            >
                <FormattedMessage id="app.tv.educational" />
            </li>
            <li
                onClick={() => handleChooseGenres(6)}
                className={`tv-page_list${activeListGenres === 6 ? '--active' : ''}`}
            >
                <FormattedMessage id="app.tv.musical" />
            </li>
            <li
                onClick={() => handleChooseGenres(8)}
                className={`tv-page_list${activeListGenres === 8 ? '--active' : ''}`}
            >
                <FormattedMessage id="app.tv.movies" />
            </li>
            <li
                onClick={() => handleChooseGenres(10)}
                className={`tv-page_list${activeListGenres === 10 ? '--active' : ''}`}
            >
                <FormattedMessage id="app.tv.news" />
            </li>
            <li
                onClick={() => handleChooseGenres(9)}
                className={`tv-page_list${activeListGenres === 9 ? '--active' : ''}`}
            >
                HD
                    </li>
        </ul>

        <hr />
        <ul>
            <li><FormattedMessage id="app.tv.likes" /> </li>
            <li><FormattedMessage id="app.tv.recorders" /> </li>
            <li><FormattedMessage id="app.tv.users" /> </li>
            <li><FormattedMessage id="app.tv.find" /> </li>
        </ul>
    </div>
)