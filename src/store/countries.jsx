import { connect } from "react-redux";
import React, {  useEffect } from "react";
import { getAllCountries } from "./actions";

function Countries(props){
    useEffect(()=>{
        props.getCountries()
},[])
    return(
        
    <div>
        <h1>COUNTRIES</h1>
    {
        props.Countries?.map((country)=>{
            return<li> <h1>{country.title}</h1>
           
            </li>
        })
    }
    
    </div>
    )
}
function mapstatetoprops(state){
    return state.countriesReducer
}
function mapDispatchtoprops(dispatch){
    return {
        getCountries:()=>{dispatch(getAllCountries())}
    }
}
export default connect(mapstatetoprops,mapDispatchtoprops)(Countries)








