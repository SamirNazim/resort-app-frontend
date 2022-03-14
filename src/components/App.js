import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ListingFilter from '../pages/ListingFilter'
import ListingPage from '../pages/ListingPage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';

function App() {
  //properties object here - propertyType, listingContainer

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="listings" element={<ListingFilter />} />
        <Route path="listings/:params" element={<ListingFilter />} />
        <Route path="listings/property/:params" element={<ListingPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
