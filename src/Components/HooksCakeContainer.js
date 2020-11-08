import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { buyCake } from "./actions/cakeAction";

const HooksCakeContainer = ()=>{
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
    const dispatch = useDispatch();

    return (
        <div>
             <h1>No of Cakes(with hooks) : {numOfCakes}</h1>
             <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;