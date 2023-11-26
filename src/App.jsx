import Navbar from './components/Navbar';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import { Home, About, Contacts } from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App