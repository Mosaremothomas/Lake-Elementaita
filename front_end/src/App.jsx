import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './containers/Homepage'
import Weddings from './containers/Weddings'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <BrowserRouter>        
        <ScrollToTop />
        <Routes>          
          <Route path="/" element={ <Homepage /> } />
          <Route path="/weddings" element={ <Weddings /> } />
        </Routes>
      </BrowserRouter>     
    </>
  )
}

export default App
