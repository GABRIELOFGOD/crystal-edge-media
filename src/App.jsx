import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/fixed/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import About from '../pages/About';
import Team from '../pages/Team';
import { CreateUserContext } from '../utils/ReusableFunctions';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'services/:id',
        element: <Services />
      },
      {
        path: 'team',
        element: <Team />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => {
  return (
    <CreateUserContext>
      <RouterProvider router={router} />
    </CreateUserContext>
  )
}

export default App