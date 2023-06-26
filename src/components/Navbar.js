

function Navbar(){
  return(
    <div>
      <navbar className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <div className="container ms-4 me-0">
          <a href="#" className="navbar-brand">
            <img className="logo img-fluid" src="./logo-n.png"></img>
            <span className="myName"> urkhat Jumabaev</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target='#menu'>
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse " id="menu">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
      
    </div>
  )
}

export default Navbar