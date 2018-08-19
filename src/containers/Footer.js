import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="http://adstudio.zmessenger.com">AdStudio</a> &copy; 2018 zmessenger.</span>
        <span className="ml-auto">Powered by <a href="http://www.zmessenger.com/">zmessenger</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
