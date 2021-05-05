/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import {
  setScheduleState,
  setStateCarusel,
} from '../../../../redux/actions/mainStateActions'
import {
  getChanals,
  getChooseGenre,
  getFocusSection,
  getStateCarusel,
} from '../../../../redux/selectors/mainStateSelector'
import './Genres.scss'

const Genre = () => {
  const focusSection = useSelector(getFocusSection)
  const chanals = useSelector(getChanals)
  const defineGanre = useSelector(getChooseGenre)
  const stateCarusel = useSelector(getStateCarusel)
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [stateChanals, setStateChanals] = useState(null)
  const [selectedItem, setSelectedItem] = useState(0)

  useEffect(() => {
    setStateChanals([
      ...chanals.filter((chan) => chan.genres[0].includes(+defineGanre)),
    ])
  }, [defineGanre])

  const logger = () => {
    dispatch(setScheduleState(stateChanals[0].ch_altname))
    setSelectedItem(0)
  }

  // здесь при отсортировке\перерисовке списка определяеся активный элемент с 0-м индексом
  useEffect(() => {
    stateChanals && stateChanals.length > 0 && logger()
  }, [stateChanals])

  const handleAtive = () => {
    setIsActive(true)
    !defineGanre && setStateChanals(chanals)
  }

  useEffect(() => {
    if (focusSection === 'genres') {
      handleAtive()
      dispatch(setStateCarusel(+selectedItem))
    } else {
      setIsActive(false)
      dispatch(setStateCarusel(0))
    }
  }, [focusSection])

  useEffect(() => {
    isActive &&
      dispatch(setScheduleState(stateChanals[stateCarusel].ch_altname))
    isActive && setSelectedItem(+stateCarusel)
  }, [stateCarusel])

  return (
    <div
      className={`genres focusable isCarusel ${
        focusSection === 'genres' ? 'focused' : ''
      }`}
    >
      <Carousel
        axis="vertical"
        showThumbs={false}
        selectedItem={selectedItem}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        swipeable={false}
        autoFocus={false}
      >
        {stateChanals?.map((item, i) => (
          <div
            className={`carusel_sl ${item.id} ${i} 
                    ${+selectedItem === +i && isActive ? 'active' : ''}`}
            key={item.id}
          >
            <i> {i + 1} </i> &nbsp; <span> {item.ch_altname} </span> &#x20;
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Genre
