import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import ProductDescription from './json'
import Product from './Components/Product';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentId : 1
    }
    localStorage.setItem("currentId", 1);
}
componentDidMount =() => {
  this.setState({
    currentId : parseInt(localStorage.getItem("currentId"))
  })
  console.log("ID",this.state.currentId ,parseInt(localStorage.getItem("currentId")) );
  console.log("called")
}
render () {
  const ProductLists = ProductDescription;

  return (
    <div>
      <BrowserRouter basename={'/products'}>
            <Switch>
              <Route
              exact
              path="/"
              component={Product}
              />
            </Switch>
          </BrowserRouter>
    </div>
  );
}
}

export default App;
