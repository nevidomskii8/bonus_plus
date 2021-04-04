import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Russian from '../lang/ru.json';
import Ukrainian from '../lang/ua.json';


export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'ru-RU') {
    lang = Russian;
}else {
    lang = Ukrainian;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'ru') {
            setMessages(Russian);
        } else {
            setMessages(Ukrainian);
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;