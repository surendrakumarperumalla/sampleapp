import React from "react";
import { connect } from "react-redux";
function Products(props){
    console.log(props);

    return(
        <div className="border border-2 border-success m-2 p-2">
            <h1>products</h1>
            <ul className="d-flex flex-wrap">
            {
                props.productsReducer.products.map((p)=>{
                    return<li className="w-25 p-2 d-flex flex-column justify-content-between">
                        {p.title.slice(0,20)}
                        <img src={p.image}   className="w-100"alt="" />
                        <h2>{p.price}</h2>
                        <button className="btn btn-success" onClick={()=>{props.dispatch({type:"ADDTOCART",payload:p})}}>ADD TO CART</button>
                        </li>
                })  
            }
             </ul>
        </div>
    )
          
           
}


export default connect(store=>store)(Products)