import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './Home'
import About from './About'
import ProductDetails from './ProductDetails'
import NotFound from './NotFound'
import Products from './Products'
import Category from './Category'
import LoginPage from './Login'
import RegisterPage from './Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/category/:category',
    element: <Category />
  },
  {
    path: '/products/:id',
    element: <ProductDetails />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}
