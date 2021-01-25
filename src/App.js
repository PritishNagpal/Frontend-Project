import React from 'react';
import Form from './components/Form';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TableData from './components/TableData';
import HomeButton from './components/HomeButton';



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeButton} />
      <Route path="/form" component={Form} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
