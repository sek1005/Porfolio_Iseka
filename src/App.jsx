import { Outlet } from "react-router-dom";
import Nav from "./components/Nav"
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Nav/>
        <main className="containerApp">
          <Outlet />
        </main>
     <Footer /> 
    </div>
  );
}

export default App;
