import React, { useRef } from 'react'
import { Second } from '../Second/Second'
import { First } from '../First/First'
import { Third } from '../Third/Third'
import { Fourth } from '../Fourths/Fourths'
import './Main.scss'


export const Main = () => {

    const mainRef = useRef(null);

    const handleKeyDown = (event) => {
        const focusable = document.querySelectorAll('.focusable')
        const focused = document.querySelectorAll('.focused')
        const active = document.querySelector('.active')

        if (event.key === 'ArrowDown') {
            if (active.classList.contains('main-container__first')) {
                if (focused[0].nextElementSibling) {
                    focused[0].classList.remove('focused')
                    focused[0].nextElementSibling.classList.add('focused')
                }
            }
            if (active.classList.contains('main-container__second')) {
                if (focused[1].nextElementSibling) {
                    focused[1].classList.remove('focused')
                    focused[1].nextElementSibling.classList.add('focused')
                }
            }
            if (active.classList.contains('main-container__third')) {
                if (focused[2].nextElementSibling) {
                    focused[2].classList.remove('focused')
                    focused[2].nextElementSibling.classList.add('focused')
                }
            }
            if (active.classList.contains('main-container__fourth')) {
                if (focused.nextElementSibling) {
                    focused.classList.remove('focused')
                    focused.nextElementSibling.classList.add('focused')
                }
            }
        }

        if (event.key === 'ArrowUp') {
            if (active.classList.contains('main-container__first')) {
                if (focused[0].previousElementSibling) {
                    focused[0].classList.remove('focused')
                    focused[0].previousElementSibling.classList.add('focused')
                }
            }
            if (active.classList.contains('main-container__second')) {
                if (focused[1].previousElementSibling) {
                    focused[1].classList.remove('focused')
                    focused[1].previousElementSibling.classList.add('focused')
                }
            }
            if (active.classList.contains('main-container__third')) {
                if (focused[2].previousElementSibling) {
                    focused[2].classList.remove('focused')
                    focused[2].previousElementSibling.classList.add('focused')
                }
            }
        }

        if (event.key === 'ArrowLeft') {
            if (active.previousElementSibling) {
                active.classList.remove('active')
                active.previousElementSibling.classList.add('active')
            }
        }

        if (event.key === 'ArrowRight') {
            if (active.nextElementSibling) {
                active.classList.remove('active')
                active.nextElementSibling.classList.add('active')
            }
        }

        if (event.key === 'Enter') {

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