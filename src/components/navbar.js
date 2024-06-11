import React from 'react'

export default function navbar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={props.mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">EDITOR</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
          

          <label>
            <input className="toggle-checkbox" type="checkbox" onClick={props.toggleMode}/>
            <div className="toggle-slot">
              <div className="sun-icon-wrapper">
                <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
              </div>
              <div className="toggle-button"></div>
              <div className="moon-icon-wrapper">
                <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
              </div>
            </div>
          </label>


         
          

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          
        </div>
        
      </div>
     
    </nav>
  )
}
