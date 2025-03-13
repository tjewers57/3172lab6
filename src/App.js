import './App.css';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import PageNotFound from './components/404';
import { Format } from './Format';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Format/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="*" element={<PageNotFound/>} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
