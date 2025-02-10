import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Task from "./pages/Task";
import Gold from "./pages/Gold";
import Nofaunt from "./pages/Nofaunt";
import Aside from "./components/Aside";
import InCard from "./components/InCard";
import { ProviderTask } from "./context/Contex.task";
import Card from "./components/Card";
function App() {
 
    
    return (
        <div>
      <div className="flex ">
        <ProviderTask>
          <Router>
            <Aside />
            <Routes>
              <Route path="/" element={<Home />} />
              {/*  */}
              <Route path="/task/" element={<Task />} >
                <Route path="" element={<Card/>} />
                <Route path="inTask" element={<InCard/>} />
              </Route>
              {/*  */}
              <Route path="/gold" element={<Gold />} />
              <Route path="/*" element={<Nofaunt />} />
            </Routes>
          </Router>
        </ProviderTask>
      </div>
      
    </div>
  );
}
export default App;
