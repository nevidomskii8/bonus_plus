import React from 'react'


export const Genre = (genres) => (
    <ul className='focusable'>
        {genres.genres.map((item, i) => <li tabIndex={`${20 + i}`} key={item.id}><i> {i + 1} </i> &nbsp; <span> {item.ch_altname} </span>   &#x20;</li>)}
    </ul>
)