import React from 'react';
import { Link } from "react-router-dom";


class ProductName extends React.Component {
    render(){ 
      let productId = localStorage.getItem('currentId');
      const ProductLists = this.props.productName;
    return (
     
      <div className="row">
        <div className="col-12 product-name-box">
        <p className="product-name m-0">{ProductLists.map(item => item[0].productName)}</p>
        <Link
          to={`/products`}
          className="product-name m-0"
          onClick = {() => localStorage.setItem('currentId', parseInt(productId) + 1)}
      > --></Link>
        
        </div>
    </div>
      
    );
  }
}
export default ProductName;