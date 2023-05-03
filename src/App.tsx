import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
