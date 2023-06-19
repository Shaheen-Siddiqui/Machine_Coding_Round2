import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HabitListing } from "./Pages/HabitListing";
import { Archive } from "./Pages/Archive";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HabitListing />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
