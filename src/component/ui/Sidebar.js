import React from 'react'

export default function Sidebar() {
  return (
    <div>
         <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand ">
            <img src="../assets/img/images/logo.png" className='logo' width="100px" height="100px"/>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <img src="../assets/img/images/logo.png" className='logo' width="67px" height="70px"/>
          </div>
          <div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="nav-item ">
              <a href="/main" className="nav-link"><i className="fas fa-fire" /><span>Dashboard</span></a>
            </li>
            <li className="menu-header">Starter</li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span>User</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="/user">User-Listing</a></li>
                <li><a className="nav-link" href="/healthscreen">Healthscreen</a></li>
               
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link has-dropdown" data-toggle="dropdown"><i className="far fa-user" /> <span>Driver</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="/driverdetail">Driver Detail</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-ellipsis-h" /> <span>CMS</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="/legal">Legal</a></li>
                <li><a className="nav-link" href="/privacy">Privacy</a></li>
                <li><a className="nav-link" href="/terms&condition">Terms& Conditions</a></li>
              </ul>
            </li>
          </ul>
          </div>
         
        </aside>
      </div>
    </div>
  )
}
