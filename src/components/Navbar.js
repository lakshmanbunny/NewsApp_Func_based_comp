import React from 'react'
import { Link } from 'react-router-dom'

const  Navbar=()=> {
    return (
      <div><nav className="navbar navbar-expand-lg bg-body-tertiary "data-bs-theme="light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
      <img src="global-news.gif" alt="Bootstrap" width="40" height="40" />
      <strong>NewsMonkey</strong>
    </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/business">business</Link></li>
                <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                {/* <li><hr className="dropdown-divider" />Entertainment</li> */}
                <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                {/* <li><Link className="dropdown-item" to="/">General</Link></li> */}
                <li><Link className="dropdown-item" to="/health">health</Link></li>
                <li><Link className="dropdown-item" to="/science">science</Link></li>
                <li><Link className="dropdown-item" to="/technology">technology</Link></li>

              </ul>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link disabled" aria-disabled="true" >Disabled</a> */}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
    )
  
}

export default Navbar