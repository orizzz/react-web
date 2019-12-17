import React from 'react';
import './css/App.css';
import Main from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Search from './pages/Search'
import Header from './component/Header'
import Footer from './component/Footer'
import ErrorBoundary from './component/ErrorBoundary'
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <ErrorBoundary>
            <Route exact name="Home" path="/" component={Main} />
            <Route exact name="About" path="/About" component={About} />
            <Route exact name="Detail" path="/Detail/:id/:nama_kost" component={Detail} />
            <Route exact name="Search" path="/Search/:searchQuery" component={Search} />
          </ErrorBoundary>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
