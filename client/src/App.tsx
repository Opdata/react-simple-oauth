import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Loginpage from './Components/LoginPage/Loginpage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/login" component={Loginpage} />
    </BrowserRouter>
  );
}

export default App;
