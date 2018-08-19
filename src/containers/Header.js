import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import logo from '../assets/logo.png';
import icon from '../assets/icon.png';

import UserMenu from './menus/UserMenu';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'AdStudio Logo' }}
          minimized={{ src: icon, width: 30, height: 30, alt: 'AdStudio Icon' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <UserMenu />
        </Nav>
      </React.Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;


function mapStateToProps({ somedata }) {
  return {
    somedata
  };
}

export default connect(mapStateToProps, null)(Header);
