import React, { useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchState } from './redux/actions/mainStateActions'
import { useKeyDown } from './helpers/useKeyListener'
import { TVPage } from './components/pages/mainPage/MainPage'
import styles from './Styles.module.scss'
import { getChooseNav } from './redux/reducer/mainState'

export default function Routes() {
  const menu = useSelector(getChooseNav)

  const handleKeyDown = useKeyDown()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchState())
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Router>
      <div className={`${styles.main} ${styles[menu]}`}>
        <Switch>
          <Route path="/tv/:nav">
            <TVPage />
          </Route>
          <Route exact path="/tv">
            <TVPage />
          </Route>
          <Redirect to="/tv" />
        </Switch>
      </div>
    </Router>
  )
}
