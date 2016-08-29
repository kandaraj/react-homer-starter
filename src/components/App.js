import React, { PropTypes } from 'react';

// Includes the child containers and components
import { Header } from '../containers/header';

// Include all the root level styles and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery';
import 'bootstrap';
import 'slimscroll';
import 'metismenu';
import '../styles/homer';
import '../styles/homer/style.scss';

const App = (props) => {
  return (
    <span>

      {/*<div className="splash"> <div className="color-line"></div><div className="splash-title"><h1>Homer - Responsive Admin Theme</h1><p>Special AngularJS Admin Theme for small and medium webapp with very clean and aesthetic style and feel. </p><div className="spinner"> <div className="rect1"></div> <div className="rect2"></div> <div className="rect3"></div> <div className="rect4"></div> <div className="rect5"></div> </div> </div> </div>*/}

      <Header/>

      <aside id="menu">
        <div id="navigation">
          <div className="profile-picture">

            <div className="stats-label text-color">
              <span className="font-extra-bold font-uppercase">Username</span>

              <div className="dropdown">
                <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                  <small className="text-muted">Links <b className="caret"></b></small>
                </a>
                <ul className="dropdown-menu animated flipInX m-t-xs">
                  <li><a href="#">Example link</a></li>
                  <li><a href="#">Example link</a></li>
                </ul>
              </div>


            </div>
          </div>

          <ul className="nav" id="side-menu">
            <li className="active">
              <a href="index.html"> <span className="nav-label">Page 1</span> <span className="label label-success pull-right">start</span> </a>
            </li>
            <li>
              <a href="page2.html"> <span className="nav-label">Page 2</span> </a>
            </li>

          </ul>
        </div>
      </aside>

      <div id="wrapper">

        <div className="content animate-panel">
          <div className="row">
            <div className="col-lg-12">
              <div className="hpanel">
                <div className="panel-heading">
                  <div className="panel-tools">
                    <a className="showhide"><i className="fa fa-chevron-up"></i></a>
                    <a className="closebox"><i className="fa fa-times"></i></a>
                  </div>
                  Title
                </div>
                <div className="panel-body">
                  Page 1
                </div>
              </div>
            </div>
          </div>
        </div>


        <footer className="footer">
        <span className="pull-right">
            Example text
        </span>
          Company 2016
        </footer>

      </div>

      {props.children}

    </span>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
