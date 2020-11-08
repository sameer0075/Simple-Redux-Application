import React from "react";
import {connect} from "react-redux"

import {buyIcecream} from "./actions/icecreamAction"


const IcecreamContainer = (props) =>{
  const [number,setNumber] = React.useState();
return(
    <div>
        <div>
             <h1>No of Icecreams : {props.numOfIcecreams}</h1>
             <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
             <button onClick={()=>props.buyIcecream(number)}>Buy {number} Icecreams</button>
       </div>
  </div>
)

}

const mapStateToProps = state=>{
  return {
    numOfIcecreams : state.icecream.numOfIcecreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream : (number) => dispatch(buyIcecream(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)
