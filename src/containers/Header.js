/**
 * Created by skandara on 29/08/2016.
 */
import React from 'react';

export class Header extends React.Component {
  componentWillMount(){
    console.log("<Header /> is about to mouunt");
  }
  componentDidMount(){
    console.log("<Header /> has finished mounted");
  }
  render(){
    return(
      <div id="header">
        <div className="color-line">
        </div>
        <div id="logo" className="light-version">
        <span>
            APP NAME
        </span>
        </div>
        <nav role="navigation">
          <div className="header-link hide-menu"><i className="fa fa-bars"></i></div>
          <div className="small-logo">
            <span className="text-primary">APP NAME</span>
          </div>
          <form role="search" className="navbar-form-custom" method="post" action="#">
            <div className="form-group">
              <input type="text" placeholder="Search something special" className="form-control" name="search" />
            </div>
          </form>
          <div className="mobile-menu">
            <button type="button" className="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
              <i className="fa fa-chevron-down"></i>
            </button>
            <div className="collapse mobile-navbar" id="mobile-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a className="" href="#">Link</a>
                </li>
                <li>
                  <a className="" href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-right">
            <ul className="nav navbar-nav no-borders">
              <li>
                <a href="#">
                  <i className="pe-7s-upload pe-rotate-90"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}

export default Header;
