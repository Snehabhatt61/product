import React, {Fragment } from 'react';
import ProductDescription from '../json'


class ProductImage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){ 
        const ProductLists = this.props.product;
        console.log("props", ProductLists)
    return (
     
      <div className="">
          
            <img src = "/images/image1.jpg" alt = "lost" className="image-size"
            />
          </div>
      
    );
  }
}
export default ProductImage;