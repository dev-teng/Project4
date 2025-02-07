import { Outlet, Link } from "react-router-dom";
import bsuLogo from './image/bsu.png'
function Navbar() {
  return (
    <main className='d-flex flex-column min-vh-100'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid bg-dark p-2">
            <Link className="navbar-brand text-white fw-bold fs-5 " to="/"><img className="img-fluid me-2" style={{width: '3rem'}} src={bsuLogo} />BSU</Link>
        
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
             
            </div>
          </div>
        </nav>
      <Outlet />
      <footer className='p-3 text-center footer mt-auto fw-bold text-white bg-dark'>Copyright Allserved 2025</footer>
      </main>
  )
}

export default Navbar