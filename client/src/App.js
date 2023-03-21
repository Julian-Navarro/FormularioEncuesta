import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./components/Surveys/Survey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Survey />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
