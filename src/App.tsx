import { Provider } from "react-redux";
import Routes from "./Routes";
import "./App.scss";
import Wrapper from "./wrapper/Wrapper";
import store from "./redux/createStore";

function App() {
  return (
    <Wrapper>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Wrapper>
  );
}

export default App;
