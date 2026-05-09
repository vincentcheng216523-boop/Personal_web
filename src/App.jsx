import Navbar from './Navbar';
import Hero from './Hero';
import Education from './Education';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <main style={{ marginTop: '70px', padding: '2rem' }}>
        {/* Your content */}
      </main>
    </div>
  );
}

export default App;