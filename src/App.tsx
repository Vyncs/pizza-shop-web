import { Button } from './components/ui/button'
import './global.css'
import { router } from './routes'
import {RouterProvider} from 'react-router-dom'
export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
