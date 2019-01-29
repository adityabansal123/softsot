import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import '../components/style.css';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    const App = () => (
	<div>
	  <switch>
		<Route exact path='/' component={Home}/>
		<Route path='/list' component={List}/>
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
