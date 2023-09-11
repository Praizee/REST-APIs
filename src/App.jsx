import { useState } from 'react'
import './App.css'
import Webpages from './webpages/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Webpages />
      </div >
    </>
  )
}

export default App
