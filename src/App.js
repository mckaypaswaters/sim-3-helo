import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav'

function App(props) {
  
  return (
    <div className="App">
      {routes}
      {/* <Nav/> */}
    </div>
  );
}

export default App;
