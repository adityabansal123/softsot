import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import '../components/style.css';

class App extends Component {
  render() {
    const App = () => (
	<div>
	  <switch>
		<Route exact path='/' component={Home}/>
		<Route path='/about' component={About}/>
		<Route path='/team' component={Team}/>
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
