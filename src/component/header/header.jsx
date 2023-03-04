import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" sticky-top bg-white p-2 shadow bg-opacity-75">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" href="#">Navbar</Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">Link</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled">Disabled</Link>
              </li>
            </ul>

            <div className="d-flex">
              <button class="btn btn-success">Get Started</button>
            </div>


          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header;