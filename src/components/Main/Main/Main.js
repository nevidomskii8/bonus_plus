import React from 'react'
import { Second } from '../Second/Second'
import { First } from '../First/First'
import { Third } from '../Third/Third'
import { Fourth } from '../Fourths/Fourths'
import './Main.scss'
import { useDispatch } from 'react-redux'
import { setFocusActive, setFocusSection } from '../../../redux/actions/mainStateActions'


export const Main = () => {
    const dispatch = useDispatch()

    const handleKeyDown = (event) => {
        const focus = document.querySelectorAll('.focusable')

        if (event.key === 'ArrowDown') {
            focus.forEach(section => {
                section.classList.contains('focus')
                    && section.childNodes.forEach(child => child.nodeName === 'UL'
                        ? child.childNodes.forEach(li => {
                            if (li?.classList.contains('active')) {
                                if (li.nextSibling) {
                                    dispatch(setFocusActive(li.nextSibling?.className))
                                } else {
                                    dispatch(setFocusActive(child.childNodes[0].className))
                                }
                                return
                            }
                        }
                        )
                        : null
                    )
            })
        }

        if (event.key === 'ArrowUp') {
            focus.forEach(section => {
                section.classList.contains('focus')
                    && section.childNodes.forEach(child => child.nodeName === 'UL'
                        ? child.childNodes.forEach(li => {
                            if (li?.classList.contains('active')) {
                                if (li.previousSibling) {
                                    dispatch(setFocusActive(li.previousSibling?.className))
                                } else {
                                    dispatch(setFocusActive(child.childNodes[child.childNodes.length-1].className))
                                }
                                return
                            }
                        }
                        )
                        : null
                    )
            })

        }

        if (event.key === 'ArrowLeft') {
            focus.forEach(section => {
                if (section.classList.contains('focus')) {
                    section.previousSibling?.classList[0] === 'focusable'
                        ? dispatch(setFocusSection(section.previousSibling.classList[1]))
                        : dispatch(setFocusSection(focus[focus.length - 1].classList[1]))
                }
            })
        }

        if (event.key === 'ArrowRight') {
            focus.forEach(section => {
                if (section.classList.contains('focus')) {
                    section.nextSibling?.classList[0] === 'focusable'
                        ? dispatch(setFocusSection(section.nextSibling.classList[1]))
                        : dispatch(setFocusSection(focus[0].classList[1]))
                }
            })
        }

        if (event.key === 'Enter') {
            console.dir(focus)
        }
    };


    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])



    return (
        <div className="main-container">
            <First />
            <Second />
            <Third />
            <Fourth />
        </div>
    )
}