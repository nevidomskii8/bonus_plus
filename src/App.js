import { Provider, useDispatch } from 'react-redux'
import Routes from './Routes'
import './App.scss'
import store from './redux/rootReducer'
import { useEffect } from 'react'
import { fetchState } from './redux/actions/mainStateActions'


function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
