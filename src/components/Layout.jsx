import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className="layout-root">
      <div className="layout-container">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
