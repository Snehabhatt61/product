import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import ProductDescription from './json'
import Product from './Components/Product';

let id;
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
  // id=parseInt(localStorage.getItem("currentId"))
  // console.log("UPPERID",id)
  console.log("called")
}
// componentDidUpdate = () => {
//   if(parseInt(localStorage.getItem("currentId")) !== this.state.currentId)
//   {
//     this.setState({
//       currentId : currentId;
//     })
//   }
// }
render () {
  const ProductLists = ProductDescription;
  console.log("hfdjg",ProductLists)

  return (
    <div>
      <BrowserRouter>
            <Switch>
              <Route
              exact
              path="/products"
              component={Product}
              />
            </Switch>
          </BrowserRouter>
    </div>
  );
}
}

export default App;
