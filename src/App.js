import './App.css'
import React, { useState } from 'react'

import Navbar from './components/Navbar'
import DisplaySection from './components/DisplaySection'

const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [userData,setUserData] = useState();
  return (
    <div>
      <Navbar  setShowLoader={setShowLoader} setUserData={setUserData}/>
      <DisplaySection showLoader={showLoader} userData={userData}/>
    </div>
  )
}

export default App
