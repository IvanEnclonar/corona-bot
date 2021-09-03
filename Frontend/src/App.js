import './App.css';
import Main from './Components/Main.js';
import FrontPage from './Components/FrontPage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={FrontPage} exact/>
      <Route path="/Chat" component={Main} />
    </Router>
    );
}

export default App;
