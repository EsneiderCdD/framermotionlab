import { BrowserRouter } from 'react-router-dom';
import Navbar from './reusable/Navbar/Navbar';
import Footer from './reusable/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <AppRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
