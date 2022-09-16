import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store/Store"
import {injectStore} from "api/http";
injectStore(store);





function App() {

  return (
    <Provider store = {store}> 
      <Routes />
    </Provider>
 );
}

export default App;
