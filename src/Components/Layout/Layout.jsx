import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout


// In React, children is a special prop that allows you to pass components or elements nested inside a component when it is used.
// It's essentially a way to render whatever is passed between the opening and closing tags of a component.

// children is used to make a component reusable and flexible.
// It automatically includes any nested JSX passed inside the component's opening and closing tags.
// This pattern is especially useful for components like layouts, modals, or wrappers.