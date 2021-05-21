import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Loginpage from './Components/LoginPage/Loginpage';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Loginpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
