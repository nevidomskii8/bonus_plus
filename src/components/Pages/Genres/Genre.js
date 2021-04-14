import { useSelector } from 'react-redux'
import { getChanals, getFocusSection } from '../../../redux/selectors/mainStateSelector'


export const Genre = () => {
    const focusSection = useSelector(getFocusSection)
    const chanals = useSelector(getChanals)
    console.log(chanals)

    return (
        <div className={`tv-page__genres focusable ${focusSection === 'tv-page__genres' ? 'focused' : ''}`}>
            <ul className={`genre`}>
                {chanals.map((item, i) => <li tabIndex={`${20 + i}`} key={item.id}><i> {i + 1} </i> &nbsp; <span> {item.ch_altname} </span>   &#x20;</li>)}
            </ul>
        </div>
    )
}