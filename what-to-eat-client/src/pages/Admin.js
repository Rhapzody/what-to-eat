import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import AdminHome from "./AdminHome";
import AdminWrite from "./AdminWrite";
import AdminTags from "./AdminTags";
import AdminTagTypes from "./AdminTagTypes";
import NotFound from './NotFound'

export default class Admin extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
              <div className="sidebar-brand-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <div className="sidebar-brand-text mx-3"><h3>กินไรดี</h3></div>
            </NavLink>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            <NavLink className="nav-item" activeClassName="active" exact to="/admin">
              <span className="nav-link">
                <i className="fas fa-pizza-slice"></i>
                <span>เมนู</span>
              </span>
            </NavLink>

            <NavLink className="nav-item" activeClassName="active" to="/admin/write">
              <span className="nav-link">
              <i className="fas fa-edit"></i>
                <span>เขียนเมนู</span>
              </span>
            </NavLink>

            <NavLink className="nav-item" activeClassName="active" exact to="/admin/types">
              <span className="nav-link">
              <i className="fas fa-fw fa-table"></i>
                <span>ประเภท</span>
              </span>
            </NavLink>

            <NavLink className="nav-item" activeClassName="active" exact to="/admin/tags">
              <span className="nav-link">
                <i className="fas fa-tags"></i>
                <span>แท็ก</span>
              </span>
            </NavLink>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

          </ul>
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  
                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small"> ชื่อ </span>
                      <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
                    </a>
                    {/* <!-- Dropdown - User Information --> */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        ตำแหน่ง
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        ออกจากระบบ
                      </a>
                    </div>
                  </li>

                </ul>

              </nav>
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <Switch>
                  <Route exact path="/admin" component={AdminHome}/>
                  <Route path="/admin/write" component={AdminWrite}/>
                  <Route path="/admin/tags" component={AdminTags}/>
                  <Route path="/admin/types" component={AdminTagTypes}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
              {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; กินไรดี 2019</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    )
  }
}
