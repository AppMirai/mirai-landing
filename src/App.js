import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import Result from './pages/Result/Result';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
    return (    
      <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/upload" element={<Upload />} />
              <Route path="/result/:uid" element={<Result />} />
            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
