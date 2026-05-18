import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';

// Home Sections
import Hero from './Hero';
import Education from './Education';
import Exchange from './Exchange';
import Awards from './Awards';

// Other Pages
import Blog from './pages/Blog/Blog';
import Photography from './pages/Photography/Photography';
import Vlog from './pages/Vlog/Vlog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* HOME ROUTE - Shows all your current sections */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Education />
              <Exchange />
              <Awards />
              <main style={{ marginTop: '70px', padding: '2rem' }}>
                {/* You can add more content here */}
              </main>
            </>
          } 
        />

        {/* OTHER ROUTES */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/vlog" element={<Vlog />} />
        <Route path="/photography" element={<Photography />} />

        {/* 404 Not Found */}
        <Route path="*" element={<h1 style={{ textAlign: 'center', marginTop: '100px' }}>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;