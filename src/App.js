import './App.css';
import Kumar from './Component/Login/k';
import LoginScreen from './Component/Login/LoginScreen';
import AuthoScreen from "./Component/Login/AuthoScreen";
import YARRA from './Component/Login/Todo';
import Dispalyname from "./Component/Login/Dispalyname";
import UserDetails from './Component/UserDetails/UserDetails';
import { BrowserRouter ,Routes , Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthoScreen />}>
          <Route index element={<YARRA />} />
          <Route path="blogs" element={<Dispalyname />} />
          <Route path="contact" element={<LoginScreen />} />
          <Route path="as" element={<AuthoScreen />} />
          <Route path="*" element={<Kumar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
