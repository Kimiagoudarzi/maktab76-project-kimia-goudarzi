import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar/NavBar";
import HomeBody from "./components/homePage/HomeBody";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// Routes, Route,

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HomeBody />
    </BrowserRouter>
  );
}

export default App;
