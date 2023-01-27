import { Routes, Route, Link } from "react-router-dom";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-row gap-3 font-bold text-xl px-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<ModalPage />} />
      </Routes>
    </>
  );
};

export default App;
