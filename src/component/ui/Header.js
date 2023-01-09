import React from 'react'
import Swal from 'sweetalert'

export default function Header() {

 const Logout=async()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You want to logout??",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      window.location.href = "/";
      Swal.fire("logout", "you are logout now.", "success");
    }
  });
 }

  return (
    <div>
         <div id="app">
        <div className="main-wrapper">
          <div className="navbar-bg" />
          <nav className="navbar navbar-expand-lg main-navbar">
            <form className="form-inline mr-auto">
              <ul className="navbar-nav mr-3">
                <li><a href="/" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars" /></a></li>
                <li><a href="/" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search" /></a></li>
              </ul>
            
            </form>
            <ul className="navbar-nav navbar-right">
             
             
              <li className="dropdown"><a href="/" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <img alt="not" src="../assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
                  <div className="d-sm-none d-lg-inline-block">Hi,Abhi</div></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-title">Logged in 5 min ago</div>
                  <a href="/profile" className="dropdown-item has-icon">
                    <i className="far fa-user" /> Profile
                  </a>
                  <a href="features-activities.html" className="dropdown-item has-icon">
                    <i className="fas fa-bolt" /> Spill Support 
                  </a>
                  <a href="features-settings.html" className="dropdown-item has-icon">
                    <i className="fas fa-cog" /> Settings
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/" onClick={Logout} className="dropdown-item has-icon text-danger">
                    <i className="fas fa-sign-out-alt" /> Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
    </div>
    
    </div>
  )
}
