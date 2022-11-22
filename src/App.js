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
              <Route path="/">
                <Route index element={<Home />}/>
                </Route>
              <Route path="/upload">
                <Route index element={<Upload />}/>
                </Route>
              <Route path="/result">
                <Route index element={<Result />}/>
                </Route>
            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
