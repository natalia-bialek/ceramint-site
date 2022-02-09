import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import OSzkole from "./components/OSzkole";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
          <Route path="/" exact />
          <Route path="/o-szkole" element={<OSzkole/>}/>
          <Route path="/program-nauczania" />
          <Route path="/warsztaty-ceramiki" />
      </Routes>
    </div>
  );
}

export default App;

//<Route path="/" exact element={<Home/>} />
