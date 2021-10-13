import './App.css';
import Kumar from './Component/Login/k';
import LoginScreen from './Component/Login/LoginScreen';
import YARRA from './Component/Login/Todo';
import UserDetails from './Component/UserDetails/UserDetails';
function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      <UserDetails></UserDetails>
      <Kumar></Kumar>
      <YARRA></YARRA>
    </div>
  );
}

export default App;
