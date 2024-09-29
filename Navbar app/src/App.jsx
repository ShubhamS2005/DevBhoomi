import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/login'
import Signup from './components/signup'
import Carousel1 from './components/Carousel'
import FeedbackForm from './components/Feedback'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Login/>
       <Signup/>
      <Carousel1/>
      <FeedbackForm/>

    </>
  )
}

export default App;
