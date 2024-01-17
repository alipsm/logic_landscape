import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import Multithreading from "./pages/multithreading";
import Info from "./pages/info";

function App() {
  return (
    <div className="relative w-screen h-screen p-5 bg-champagne">
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="info" element={<Info />} />
          <Route path={Multithreading.name} element={<Multithreading />} />
          <Route path="*" element={<Navigate to={"/dashboard/info"} replace/>} />
        </Route>
        <Route path="*" element={<Navigate to={"/dashboard"} replace/>} />
      </Routes>
    </div>
  );
}

export default App;
