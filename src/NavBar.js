import React,{useState} from 'react'

export default function NavBar(props) {

  return (
    <>
    <nav className={`navbar navbar-expand-lg `} style={{backgroundColor:`${props.mode}`}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      <label className="form-check-label" for="flexSwitchCheckDefault" >Enable color modes</label>
        <button type="button" id="btn1" className="btn lg mx-1" style={{backgroundColor:"#b7b7b7"}} onClick={props.turnGrey}> </button>
      <button type="button" id="btn1" className="btn lg mx-1" style={{backgroundColor:"#F9629F"}} onClick={props.turnPink}> </button>
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className="form-check-label" for="flexSwitchCheckDefault" >{props.text}</label>
      </div> */}
    </div>
  </div>
</nav>
</>
  )
}
