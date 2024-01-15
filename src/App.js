import { Route, Routes } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="relative w-screen h-screen p-5 bg-champagne">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
