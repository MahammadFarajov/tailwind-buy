import React from 'react'
import Navbar from './components/Navbar'
import GetStarted from './components/getStarted'
import Partner from './components/Partner'
import Stats from './components/Stats'
import Partner_2 from "./components/Partner_2"
import End from "./components/End"
export default function App() {
  return (
    <div>
        <Navbar />
        <GetStarted />
        <Partner />
        <Stats />
        <Partner_2 />
        <End />
    </div>
  )
}
