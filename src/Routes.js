import { useEffect } from "react";
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchState } from "./redux/actions/mainStateActions.ts";
import { useKeyDown } from "./helpers/useKeyListener.js";
import { TVPage } from "./components/pages/mainPage/MainPage.tsx";
import styles from "./Styles.module.scss";
import { getChooseNav } from "./redux/reducer/mainState.ts";

// const video = "./assets/video/baseVideo.mp4";

export default function Routes() {
  const menu = useSelector(getChooseNav);
  const { setIsPlugIn } = useKeyDown();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchState());
    setIsPlugIn(true);
  }, []);

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
  );
}
