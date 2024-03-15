import { Button } from './components/ui/button'
import './global.css'
import { router } from './routes'
import {RouterProvider} from 'react-router-dom'
import {HelmetProvider,Helmet} from 'react-helmet-async'
export function App() {
  return (
    <>
    <HelmetProvider>
      <Helmet titleTemplate='%s | Pizza Shop'/>
      <RouterProvider router={router} />
    </HelmetProvider>
    </>
  )
}
