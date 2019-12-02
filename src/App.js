import React from 'react';
import './css/App.css';
import Main from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Search from './pages/Search'
import Header from './Component/Header'
import Footer from './Component/Footer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/About" component={About} />
          <Route path="/Detail" component={Detail} />
          <Route path="/Search" component={Search} />
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
