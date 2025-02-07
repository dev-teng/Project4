import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route from="/" element={<Navbar />}>
              <Route index element={<Home />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
