import React from 'react';

class Description extends React.Component {
    render(){ 
        const ProductLists = this.props.product;
        
    return (
       <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
              <div className="logo">DOSE</div>
              <div className="d-flex product-container">
                <input 
                placeholder = "Find Your Dose"
                className="search-box" />
                <img src="/images/search.svg" alt="search"/>
              </div>
          </div>    
      </div>
        <div className=" row col-12 product-details">
            <div className="product-heading">{ProductLists.map(item => item[0].heading)} </div>
            <div className="product-description">{ProductLists.map(item => item[0].description)}</div>
        </div>
      </div>
    );
  }
}
export default Description;