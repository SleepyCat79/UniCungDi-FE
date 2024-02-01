import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LogIn, SignUp, Landing, Main } from "./screens";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
                <Landing />
              </>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
