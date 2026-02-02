import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Ausstellung } from './pages/Ausstellung'
import { Fliesen } from './pages/Fliesen'
import { Sanitaer } from './pages/Sanitaer'
import { Naturstein } from './pages/Naturstein'
import { UeberUns } from './pages/UeberUns'
import { Kontakt } from './pages/Kontakt'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ausstellung" element={<Ausstellung />} />
          <Route path="/fliesen" element={<Fliesen />} />
          <Route path="/sanitaer" element={<Sanitaer />} />
          <Route path="/naturstein" element={<Naturstein />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
