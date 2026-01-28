import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './reusable/Navbar/Navbar';
import Footer from './reusable/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';

function Layout() {
  const location = useLocation();
  const isPlayground = location.pathname === '/playground';

  return (
    <>
      {!isPlayground && <Navbar />}
      <AppRoutes />
      {!isPlayground && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
