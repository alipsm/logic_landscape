import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import Multithreading from "./pages/multithreading";
import Info from "./pages/info";
import DoesNotSupport from "./components/doesNotSupportPage";

function App() {
  return (
    <>
    <div className="relative w-screen h-screen p-5 bg-champagne ">
      <div className="hidden md:inline-block w-full h-full">

      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="info" element={<Info />} />
          <Route path={"multithreading"} element={<Multithreading />} />
          <Route path="*" element={<Navigate to={"info"} replace/>} />
        </Route>
        <Route path="*" element={<Navigate to={"/dashboard"} replace/>} />
      </Routes>
      </div>
      <DoesNotSupport/>
    </div>
    </>
  );
}

export default App;
