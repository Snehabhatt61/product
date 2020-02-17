import React from 'react';
import Description from '../Components/Description';
import ProductImage from '../Components/ProductImage';
import ProductName from '../Components/ProductName';
import ProductDescription from '../json'
import Example from './Progress';

let ProductLists , ab;
export default class Product extends React.Component {

setData = () => {
    let currentID = localStorage.getItem('currentId');
    console.log("currentID",currentID)
    ProductLists = ProductDescription;
    console.log("rggtrtg",ProductLists)
    if(currentID > 4)
    {
        currentID = localStorage.setItem("currentId", 1)
    }
    switch (currentID) {
    case "1" : 
    console.log("case11111", ab)
    return ProductLists.map(item => item.product1);
    case "2" :
        return ProductLists.map(item => item.product2);
    case "3" :
       return ProductLists.map(item => item.product3);
    case "4" : 
        return ProductLists.map(item => item.product4);
    default : return ProductLists.map(item => item.product1)
    }
}
render () {
//    ProductLists = ProductDescription;
//   console.log("hfdjg",ProductLists)
  return (
<div className="App">
      <div className=" row">
        <div className="col-6">
      {/* {ProductLists.map(item => ( */}
        <Description product = {this.setData()}/>
      {/* ))} */}
      </div>
      <div className="col-6">
      <ProductImage />
      </div>
      </div>
      <div className="row">
        <div className="col-6 pr-0">
          <ProductName productName = {this.setData()}/>
        </div>
        <div className="col-6">
        <Example product = {this.setData()}/>
        </div>
      </div>
      </div>
  )}}

