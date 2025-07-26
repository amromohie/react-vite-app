import {useState} from 'react'
import './App.css'
import Home from "./components/Home/Home.jsx";
import Parent from "./components/Parent/Parent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div>
          <Home/>
          <Parent/>
        </div>
      </>
  )
}

export default App
