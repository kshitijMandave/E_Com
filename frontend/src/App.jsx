import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsreLayout from "./Components/Layout/UsreLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsreLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route>{/*Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
