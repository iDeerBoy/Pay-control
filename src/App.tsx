import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layoud from "./layoud/Layoud";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layoud />}>
          <Route path="/" element={<Wallet />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
