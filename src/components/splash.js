/**
 * Created by skandara on 29/08/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const Splash = () => {
  return (
    <div className="splash">
      <div className="color-line"></div>
      <div className="splash-title"><h1>Homer - Responsive Admin Theme</h1><p>Special AngularJS Admin Theme for small
        and medium webapp with very clean and aesthetic style and feel. </p>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;

