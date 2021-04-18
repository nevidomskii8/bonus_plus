import { useDispatch } from "react-redux"
import { setFocusActive, setFocusSection, setChooseNav, setChooseGanre } from "../redux/actions/mainStateActions";

export const useKeyDown = () => {
    const dispatch = useDispatch()

    const handleKeyDown = (event) => {
        const focused = document.querySelectorAll('.focused')
        const focusable = document.querySelectorAll('.focusable')
        const activeLi = document.querySelector('.active')

        if (event.key === 'ArrowDown') {
            for (let i = 0 ; i <= focused[0].children.length; i++ ) {
                if (focused[0].children[i]?.nodeName === 'UL') {    
                    for (let li = 0; li <= focused[0].children[i].children.length ; li++) {
                        if (focused[0].children[i].children[li]?.classList.contains('active')) {
                            focused[0].children[i].children[li].nextSibling
                            ? dispatch(setFocusActive(focused[0].children[i].children[li].nextSibling.classList[1]))
                            : dispatch(setFocusActive(focused[0].children[i].children[0].classList[1]))
                        }
                    }
                }
            }
        }

        if (event.key === 'ArrowUp') {
            for (let i = 0 ; i <= focused[0].children.length; i++ ) {
                if (focused[0].children[i]?.nodeName === 'UL') {
                    for (let li = 0; li <= focused[0].children[i].children.length ; li++) {
                        if (focused[0].children[i].children[li]?.classList.contains('active')) {
                            focused[0].children[i].children[li].previousSibling
                            ? dispatch(setFocusActive(focused[0].children[i].children[li].previousSibling.classList[1]))
                            : dispatch(setFocusActive(focused[0].children[i].children[focused[0].children[i].children.length -1 ].classList[1]))
                        }
                    }
                }
            }
        }

        if (event.keyCode === 37) {
            for (let i = 0; i < focusable.length; i++) {
                if (focusable[i].classList.contains('focused') && focusable[i].previousElementSibling) {
                    dispatch(setFocusSection(focusable[i].previousElementSibling.classList[0]))
                    break
                }
            }
        }
        
        if (event.keyCode === 39) {
            for (let i = 0; i < focusable.length; i++) {
                if (focusable[i].classList.contains('focused') && focusable[i].nextElementSibling) {
                    dispatch(setFocusSection(focusable[i].nextElementSibling.classList[0]))
                    break
                }
            }
        }
        
        if (event.key === 'Enter') {
            switch (focused[0].classList[0]) {
                case 'navigation' :
                    dispatch(setChooseNav(activeLi.classList[1]))
                    return
                case 'list-genres' :
                    // можно диспачить focusative при смещении стрелками вверх/вниз 
                    // но тогда жанры будут сортироваться сразу
                    console.log(activeLi.classList[1])
                    dispatch(setFocusSection('genres'))
                    dispatch(setChooseGanre(activeLi.classList[1]))
                    return
                case 'item-genres': 
                    console.log('item-genres')
                    return
                case 'item-genres-detail': 
                    console.log('item-genres-detail')
                    return
            }

        }
    };

    return handleKeyDown
}
