import { useState } from 'react'
import List from './pages/List'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>问卷FE</h1>
        <List></List>
      </div>
    </>
  )
}

export default App