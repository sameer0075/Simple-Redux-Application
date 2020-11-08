import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { buyIcecream } from "./actions/icecreamAction";

const HooksIcecreamContainer = ()=>{
    const numOfIcecreams = useSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch = useDispatch();

    return (
        <div>
             <h1>No of Icecreams(with hooks) : {numOfIcecreams}</h1>
             <button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
        </div>
    )
}

export default HooksIcecreamContainer;