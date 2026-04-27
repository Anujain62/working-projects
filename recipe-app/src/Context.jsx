import React, { createContext, useEffect, useReducer, useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }) => {
 let data = {
  apiData: [],
  cart: [],
  updatedData: []
}
function reducer(state,action){
  if(action.type=="Fetch_data"){
   return{
    ...state,apiData: action.payload,updatedData:action.payload
   }
  }else if(action.type=='ADD_TO_CART'){
   return{
    ...state,cart: [...state.cart,action.payload]
   }
  }else if(action.type=='UPDATE'){
    return{
      ...state,updatedData: action.payload
    }
  }else if(action.type=='REMOVE_FROM_CART'){
    return{
      ...state,cart:action.payload
    }
  }
  else{
   return state
  }
 }
 
let [state, dispatch] = useReducer(reducer,data)


  useEffect(()=>{
  fetch("https://dummyjson.com/recipes").then((res)=>{
   return res.json()
  }).then((data)=>{
    console.log(data.recipes)
   dispatch({type:"Fetch_data",payload:data.recipes})
  })
 },[])

 return(
  <div>
   <Context.Provider value={{state,dispatch}}>
    {children}
   </Context.Provider>
  </div>
 )
};

export default Context;
