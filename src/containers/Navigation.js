/**
 * Created by skandara on 29/08/2016.
 */
import React from 'react';
import { Link } from 'react-router';

export class Navigation extends React.Component {
  render() {
    return (
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
    );
  }

}

export default Navigation;
