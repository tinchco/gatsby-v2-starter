import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import '../css/app.css'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
          {this.props.children}
        </main>
        <Footer />
      </Fragment >
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
