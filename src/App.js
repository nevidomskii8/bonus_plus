import { Provider } from 'react-redux'
import Routes from './Routes';
import './App.scss';
import store from './redux/rootReducer';
import { Main } from './components/Main/Main/Main';


function App() {

  return (
    <Provider store={store}>
      <Main />
      {/* <Routes /> */}
    </Provider>
  );
}

export default App;
