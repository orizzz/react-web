import React from 'react';
import './css/App.css';
import Main from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Search from './pages/Search'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ErrorBoundary from './Component/ErrorBoundary'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <ErrorBoundary>
            <Route exact name="Home" path="/" component={Main} />
            <Route exact name="About" path="/About" component={About} />
            <Route exact name="Detail" path="/Detail/:id/:nama_kost" component={Detail} />
            <Route exact name="Search" path="/Search/:searchQuery" component={Search} />
          </ErrorBoundary>
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
