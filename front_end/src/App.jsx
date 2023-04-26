import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './containers/Homepage'
import Weddings from './containers/Weddings'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/weddings" element={ <Weddings /> } />
        </Routes>
      </BrowserRouter>     
    </>
  )
}

export default App
