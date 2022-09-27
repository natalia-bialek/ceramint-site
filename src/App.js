import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Footer from "./components/Footer/Footer.js";
import Aktualnosci from "./pages/Aktualnosci";
import Warsztaty from "./pages/Warsztaty";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Regulamin from "./pages/Regulamin.js";
import Kontakt from "./pages/Kontakt/Kontakt";
import Error404 from "./pages/Error404/Error404";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Routes>
          <Route
            path="/"
            exact
            element={<Aktualnosci title="Aktualności | Ceramint" />}
          />
          <Route path="/warsztaty" element={<Warsztaty />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route
            path="/polityka-prywatnosci"
            element={<PolitykaPrywatnosci />}
          />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
