import Nav from "./components/Nav";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
