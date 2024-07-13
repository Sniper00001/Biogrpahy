import NavigationBar from "./Components/NavigationBar";
import Bio from "./Components/Bio";
import Achievements from "./Components/Achievements";
import Quotes from "./Components/Quotes";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavigationBar></NavigationBar>
      <Routes>
            <Route path="/" Component={Bio}/>
            <Route path="/Achievements" Component={Achievements}/>
            <Route path="/Quotes" Component={Quotes}/>
            </Routes>  
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
