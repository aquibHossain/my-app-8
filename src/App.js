import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Chart from './Components/Chart/Chart';
import Profile from './Components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Profile></Profile>
        </Route>
        <Route exact path="/profile">
            <Profile></Profile>
        </Route>
        <Route exact path="/chart">
            <Chart></Chart>
        </Route>
        <Route exact path="*">
            <NotFound></NotFound>
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
