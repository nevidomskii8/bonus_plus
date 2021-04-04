import { Provider } from 'react-redux'
import createStore from './redux/createStore'
import Routes from './Routes';
import './App.scss';

const store = createStore();


function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
