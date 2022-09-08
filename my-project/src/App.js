import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store/Store"
import "./App.css";
import { getTotals } from "redux/features/cart/CartSlice";

store.dispatch(getTotals);

function App() {

  return (
    <Provider store = {store}> 
      <Routes />
    </Provider>
 );
}

export default App;
