import { Provider } from 'react-redux'
import Routes from './Routes'
import './App.scss'
import store from './redux/rootReducer'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
