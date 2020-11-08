import React from "react";
import {connect} from "react-redux"

import {buyCake} from "./actions/cakeAction"


const Login = (props) =>{
  const [number,setNumber] = React.useState();
return(
    <div>
        <div>
             
             <h1>No of Cakes : {props.numOfCakes}</h1>
             <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
              <button onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
       </div>
  </div>
)

}

const mapStateToProps = state=>{
  return {
    numOfCakes : state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
