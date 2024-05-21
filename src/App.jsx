import { Outlet } from "react-router-dom";
import Nav from "./components/Nav"
import "./App.scss";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Nav/>
        <main className="containerApp">
          <Outlet />
        <Contact />
        </main>
     <Footer /> 
    </div>
  );
}

export default App;
