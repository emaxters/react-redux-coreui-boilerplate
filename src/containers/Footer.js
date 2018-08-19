import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <span><a href="https://github.com/emaxters/react-redux-coreui-boilerplate/archive/master.zip">Download</a> React Redux Core UI</span>
        <span className="ml-auto">Other projects by <a href="https://github.com/emaxters/">shafeek</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
