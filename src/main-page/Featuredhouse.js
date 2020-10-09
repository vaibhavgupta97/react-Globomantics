import React from 'react';
import "./Featuredhouse.css"
import House from "../house/House"
const  Featuredhouse=(props) =>{
  if(props.house) return ( <div>
  <div className="row featuredHouse">
  <h3 className="col-md-12 text-center">
  Featured House</h3></div>
  <House house={props.house}/>
</div>)
return (<div>No featured house at this time </div>)
}


export default Featuredhouse
