import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/home/Home.tsx'
import About from './components/about/About.tsx'
import Contact from './components/contact/Contact.tsx'

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//        {
//         path: '',
//         element: <Home/>
//        },
//        {
//         path: '/about',
//         element: <About/>
//        },
//        {
//         path: '/contact',
//         element: <Contact/>
//        },
//     ]
//   }
// ])

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
    <Route path='/' element= {<Home/>}/>
    <Route path='/contact' element= {<Contact/>}/>
    <Route path='/about' element= {<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
