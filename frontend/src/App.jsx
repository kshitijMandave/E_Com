import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsreLayout from "./Components/Layout/UsreLayout";
import Home from "./Pages/Home";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
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
