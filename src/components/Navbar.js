import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container">
        <Link className="navbar-brand" style={{ color: props.mode === 'dark' ? 'white' : '#0d6efd' }} to="/">{props.Heading}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">

          </ul>
        </div>
        <div>
          <div className={`form-check form-switch cursor-pointer text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input cursor-pointer" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label cursor-pointer " htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
