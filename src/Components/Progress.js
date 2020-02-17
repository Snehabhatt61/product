import React, {Fragment } from 'react';
import { Progress } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props){
    super(props);
}
setValue = () => {
  const ProductLists = this.props.product;
  let abc = ProductLists.map(item => item[0].id)
  console.log("rs",abc)
  let vc = abc.find(ele => ele);
  console.log("vccccccc",vc)
  switch (vc) {
  case 1 : 
  return "25";
  case 2 :
      return "50" ;
  case 3 :
     return  75;
  case 4 : 
      return 100;
  default : return 25
  }
}
render(){ 
    const ProductLists = this.props.product;
    console.log("propsList", ProductLists)
return (
  
    <Fragment>
      <div className="progress-div">
        <a href="#" className="progress_arrow">&#10094; </a>
        <div className="progress_status--container">
            <span className="progress_status-no pr-3">0{ProductLists.map(item => item[0].id)}</span>
                <Progress value={this.setValue()} className="widthd" />
            <span className="progre ss_status-no pl-3">04</span>
        </div>
      <a href="#" className="progress_arrow">&#10093; </a>
      </div>
     </Fragment>
)}}