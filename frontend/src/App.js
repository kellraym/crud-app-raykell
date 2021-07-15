import './App.css';
import DisplayList from './Components/DisplayList';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AddItem from './Components/AddItem'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar />

          <section>
            <Route exact path="/" component={Home} />
            <Route path="/additem" component={AddItem} />
          </section>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
