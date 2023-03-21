import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import { SITE_TITLE } from './consts';

function App() {
  return (
    <>
      <Navbar title={SITE_TITLE} />
      <main className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
