// import React from 'react'
// // import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';
import './Info_page.scss'

// export const Info_Page = () => {

//     return (
//         <div>Info_Page</div>
//     )

// }


var React = require('react');
var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');
var AriaMenuButton = require('react-aria-menubutton');

var people = [{
    name: 'Charles Choo-Choo',
    id: 1242
}, {
    name: 'Mina Meowmers',
    id: 8372
}, {
    name: 'Susan Sailor',
    id: 2435
}];

export class Info_Page extends React.Component {
    render() {
        const peopleMenuItems = people.map(function (person, i) {
            return (
                <AriaMenuButton.MenuItem
                    key={i}
                    tag='li'
                    value={person.id}
                    text={person.name}
                    className='PeopleMenu-person'
                >
                    <div className='PeopleMenu-personPhoto'>
                        <img src={'/people/pictures/' + person.id + '.jpg'} />
                    </div>
                    <div className='PeopleMenu-personName'>
                        {person.name}
                    </div>
                </AriaMenuButton.MenuItem>
            );
        });

        var peopleMenuInnards = function (menuState) {
            var menu = (!menuState.isOpen) ? false : (
                <div
                    className='PeopleMenu-menu'
                    key='menu'
                >
                    {peopleMenuItems}
                </div>
            );
            return (
                <CSSTransitionGroup transitionName='people'>
                    {menu}
                </CSSTransitionGroup>
            );
        };

        return (
            <AriaMenuButton.Wrapper
                className='PeopleMenu'
                onSelection={handleSelection}
                style={{ marginTop: 20 }}
            >
                <AriaMenuButton.Button className='PeopleMenu-trigger'>
                    <span className='PeopleMenu-triggerText'>
                        Select a person
          </span>
                    <span className='PeopleMenu-triggerIcon' />
                </AriaMenuButton.Button>
                <AriaMenuButton.Menu>
                    {peopleMenuInnards}
                </AriaMenuButton.Menu>
            </AriaMenuButton.Wrapper>
        );
    }
};

function handleSelection(value, event) { console.log(value); console.log(event) }