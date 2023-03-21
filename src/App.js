import "./App.css";
import AppNavbar from "./components/App/AppNavbar";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";

import { BrowserRouter as Rounter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Rounter>
        <AppNavbar />
        <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/home" element={<HomeView />} />
        </Routes>
      </Rounter>
    </div>
  );
}

export default App;
