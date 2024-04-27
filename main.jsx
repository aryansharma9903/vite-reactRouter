import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
//here we write all the routes possible in the webpage
//and we will import the layout we made
//all the components will show up as they are called in layout.
//this syntax can also be used but is a bit difficult to implement
// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path:"about",
//       element: <About />
//     },
//     {
//       path:"contactus",
//       element: <ContactUs />
//     }
//   ]
// }
// ])
//this syntax is a bit easy using a method createRoutesFromElements()
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element= {<Home />} />
      <Route path='about' element= {<About />} />
      <Route path='contactus' element= {<ContactUs />} />
      {/* important */}
      <Route path='user/:id' element= {<User />} />
      <Route path='github' element={<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

//adding routerProvider which passes a value router in ehich router object is stored
//routerProvider router = {router}
//now we will define this router object
//const router = createBrowserRouter([
// {
//  path: "/",
//  element: <layout />
//  children:[{},{}]
//can pass multiple childern
// }
//])