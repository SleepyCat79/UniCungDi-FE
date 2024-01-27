import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LogIn, SignUp, Landing, Main } from "./screens";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LogIn />} />s
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
