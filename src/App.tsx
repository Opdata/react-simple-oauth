import { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myContext } from './Components/Context';
import Homepage from './Components/HomePage/Homepage';
import Loginpage from './Components/LoginPage/Loginpage';
import Navbar from './Components/NavBar/Navbar';

function App() {
  const userObj = useContext(myContext);
  console.log(userObj);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />

        {userObj ? null : <Route path="/login" component={Loginpage} />}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
