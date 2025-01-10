import { useState } from 'react'
import {RouterProvider} from 'react-router'
import List from './pages/manage/List'
import './App.css'
import router from './router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App