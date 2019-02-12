import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';
import '../common/style.css';

class App extends Component {
  render() {
    const App = () => (
	<div>
	  <switch>
		<Route exact path='/' component={Home}/>
		<Route path='/about' component={About}/>
		<Route path='/team' component={Team}/>
		<Route path='/contact' component={ContactUs}/>
	  </switch>
	</div>
    )
    return (
	<switch>
	  <App/>
	</switch>
    )
  }
}

export default App;
