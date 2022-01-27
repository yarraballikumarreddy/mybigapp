import './App.css';
import Kumar from './Component/Login/k';
import LoginScreen from './Component/Login/LoginScreen';
import YARRA from './Component/Login/Todo';
import Dispalyname from "./Component/Login/Dispalyname";
import UserDetails from './Component/UserDetails/UserDetails';
function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      <UserDetails></UserDetails>
      <Kumar></Kumar>
      <YARRA></YARRA>
      <Dispalyname></Dispalyname>
    </div>
  );
}

export default App;
