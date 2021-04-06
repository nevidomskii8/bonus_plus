// import React from 'react'
import './SetUp_page.scss'

// export const SetUp_Page = () => {

//     return (
//         <div>SetUp_Page</div>
//     )

// }

import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

const menuItemWords = ['foo', 'bar', 'baz'];

export class SetUp_Page extends React.Component {
    render() {
        const menuItems = menuItemWords.map((word, i) => {
            return (
                <li key={i}>
                    <MenuItem className='MyMenuButton-menuItem'>
                        {word}
                    </MenuItem>
                </li>
            );
        });

        return (
            <Wrapper
                className='MyMenuButton'
                onSelection={handleSelection}
            >
                <Button className='MyMenuButton-button'>
                    click me
        </Button>
                <Menu className='MyMenuButton-menu'>
                    <ul>{menuItems}</ul>
                </Menu>
            </Wrapper>
        );
    }
}

function handleSelection(value, event) { console.log(value); console.log(event) }