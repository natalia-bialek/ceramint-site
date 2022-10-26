import styles from "./styles/global.module.css";
import "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Footer from "./components/Footer/Footer.js";
import Aktualnosci from "./pages/NewsPage";
import Warsztaty from "./pages/Workshops";
import PolitykaPrywatnosci from "./pages/PrivacyPolicy";
import Regulamin from "./pages/TermsOfService.js";
import Kontakt from "./pages/Contact/Contact";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" exact element={<Aktualnosci />} />
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
