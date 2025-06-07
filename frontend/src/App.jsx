import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsreLayout from "./Components/Layout/UsreLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsreLayout />}>
          {/*User Layout */}
        </Route>
        <Route>{/*Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
