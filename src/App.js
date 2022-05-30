import { Route, Routes} from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer'

import Aktualnosci from "./pages/Aktualnosci";
import Warsztaty from './pages/Warsztaty';
import Projekty from './pages/Projekty';
import Faq from './pages/Faq';
import Wspolpraca from './pages/Wspolpraca';
import PolitykaPrywatnosci from './pages/PolitykaPrywatnosci';
import Kontakt from './pages/Kontakt'
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container fluid="md">
      <Routes>
        <Route path="/" exact element={<Aktualnosci title="Aktualności | Ceramint" />} />
        <Route path="/warsztaty" element={<Warsztaty />}/>
        <Route path="/projekty" element={<Projekty />}/>
        <Route path="/informacje/">
          <Route path="faq" element={<Faq />}/>
          <Route path="wspolpraca" element={<Wspolpraca/>} />
          <Route path="polityka-prywatnosci" element={<PolitykaPrywatnosci />}/>
        </Route>
        <Route path="/sklep" />
        <Route path="/kontakt" element={<Kontakt />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;

//<Route path="/" exact element={<Home/>} />
// /* <Route path="*" element={<404/>}/> */
