import './App.css';
import Login from "./Components/cakeContainer";
import IcecreamContainer from "./Components/icecreamContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import HooksIcecreamContainer from "./Components/HooksIcecreamContainer";
import {Provider} from "react-redux"


import store from "./Components/store/store";

 
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      {/* <HooksCakeContainer />
      <HooksIcecreamContainer /> */}
      <Login />
      <IcecreamContainer />
    </div>
    </Provider>
  );
}

export default App;
