import React, { useContext, useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Context from './Context'
import './App.css'

const Options = () => {

  const { state, dispatch } = useContext(Context)
  const previousApply = useRef(false)

  function showRateBased(type) {
    let data
    if (!previousApply.current) {
      previousApply.current = true
      if (type == 'dec') {
        data = [...state.apiData].sort((a, b) => b.rating - a.rating)
      } else if (type == 'asc') {
        data = [...state.apiData].sort((a, b) => a.rating - b.rating)
      } else {
        data = state.apiData
      }
    } else {
      if (type == 'dec') {
        data = [...state.updatedData].sort((a, b) => b.rating - a.rating)
        data.reverse()
      } else if (type == 'asc') {
        data = [...state.updatedData].sort((a, b) => a.rating - b.rating)
      } else {
        data = state.updatedData
      }
    }
    dispatch({
      type: 'UPDATE',
      payload: data
    })
  }

  function showMeal(type) {
    let data
    previousApply.current = true
    if (type == "all") {
      data = state.apiData
    } else if (type == "Dinner") {
      data = state.apiData.filter((item) => {
        return item.mealType == type
      })
    } else if (type == "Lunch") {
      data = state.apiData.filter((item) => {
        return item.mealType == type
      })
    } else if (type == "Beverage") {
      data = state.apiData.filter((item) => {
        return item.mealType == type
      })
    } else if (type == "Breakfast") {
      data = state.apiData.filter((item) => {
        return item.mealType == type
      })
    } else {
      data = state.apiData
    }

    dispatch({
      type: 'UPDATE',
      payload: data
    })
  }

  function AddItem(item) {
    console.log("add")
    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    })
  }

  return (
    <div className='option-container'>
      <div className='option-left-container'>
        <Link id='back' to={'/home'}>&#8592; Back</Link>
        <div className='btns'>
          <p>Rating</p>
          <div className='btn'>
            <button onClick={() => showRateBased("dec")}>Decending</button>
            <button onClick={() => showRateBased("asc")}>Ascending</button>
          </div>
        </div>
        <div className='btns'>
          <p>MealType</p>
          <div className='btn'>
            <button onClick={() => { showMeal("all") }}>All</button>
            <button onClick={() => { showMeal("Dinner") }}>Dinner</button>
            <button onClick={() => { showMeal("Lunch") }}>Lunch</button>
            <button onClick={() => { showMeal("Beverage") }}>Beverage</button>
            <button onClick={() => { showMeal("Breakfast") }}>Breakfast</button>
          </div>
        </div>
        <Link id='apply' to={'/home'}>Apply</Link>
      </div>

      <div id='home-container' className='option-right-container' style={{width:"1500px", marginLeft:"200px", marginTop:"10px"}}>
        {
          state.apiData.map((a, index) => {
            return (<>
              <div className='home-card'>
                <img src={a.image} />
                <h4>Name : {a.name}</h4>
                <p><b>MealType: </b> {a.mealType}</p>
                <p><b>Rating:</b> {a.rating}</p>
                <button onClick={() => AddItem(a)}>Add</button>
              </div>
            </>)
          })
        }
      </div>
    </div>
  )
}

export default Options
