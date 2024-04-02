import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/home/Home.tsx'
import About from './components/About/About.tsx'
import Contact from './components/Contact/Contact.tsx'
import User from './components/User/User.tsx'
import Github, { GitInfoLoader } from './components/GitHub/Github.tsx'

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
    <Route path='/user/:userId' element= {<User/>}/>
    <Route loader={GitInfoLoader} path='/github' element= {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
