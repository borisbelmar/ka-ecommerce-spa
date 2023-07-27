import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './Home'
import About from './About'
import ProductDetails from './ProductDetails'
import Products from './Products'
import Category from './Category'
import LoginPage from './Login'
import RegisterPage from './Register'
import Dashboard from './Dashboard'
import ErrorPage from './ErrorPage'
import ProductEdit from './ProductEdit'

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
    path: '/admin',
    element: <Dashboard />
  },
  {
    path: '/admin/products/:id',
    element: <ProductEdit />
  },
  {
    path: '/403',
    element: (
      <ErrorPage
        title="Alto ahí!"
        message="No tienes permisos para acceder a esta página"
      />
    )
  },
  {
    path: '*',
    element: (
      <ErrorPage
        title="Ups! :c"
        message="No encontramos lo que buscabas"
      />
    )
  }
])

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}
