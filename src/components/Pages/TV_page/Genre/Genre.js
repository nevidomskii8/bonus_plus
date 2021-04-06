import React from 'react'


export const Genre = (genres) => (
    <ul>
        {genres.genres.map((item, i) => <li key={item.id}><i> {i + 1} </i> &nbsp; <span> {item.ch_altname} </span>   &#x20;</li>)}
    </ul>
)