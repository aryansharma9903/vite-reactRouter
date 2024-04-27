import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
//Imagine you have a website with different sections like Home, About, and Contact. Each section might have its own content, but they all share a common layout, like a header or a sidebar.
//when there is common layout to always show up on every route we use Outlet
//this common layout is the parent route
//and each child layout will show up showing their own content
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
