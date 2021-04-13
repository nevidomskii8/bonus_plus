import React from 'react'
import { useSelector } from 'react-redux'
import { getFocusSection } from '../../../redux/selectors/mainStateSelector'


export const Genre = () => {

    return (
        <ul className={`genre`}>
            <span>здесь будет отсортированый список</span>
            {/* {genres.genres.map((item, i) => <li tabIndex={`${20 + i}`} key={item.id}><i> {i + 1} </i> &nbsp; <span> {item.ch_altname} </span>   &#x20;</li>)} */}
        </ul>
    )
}