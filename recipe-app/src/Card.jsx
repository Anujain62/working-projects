import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Context from './Context'

const Card = () => {
  let { state, dispatch } = useContext(Context)
  
  function removeItem(index) {
    let newArr = state.cart.filter((a, idxNo) => {
      return idxNo != index
    })
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: newArr
    })
  }

  return (
    <div id='home'>
      <Link to="/home" id='cart-back-btn'>
        <button>&#8592; Back</button>
      </Link>
      <div id='home-container'>
        {
          state.cart.length === 0 ? (
            <p id='cart-para'>No item in cart</p>
          ) : (
            state.cart.map((a, idx) => {
              return (<>
                <div className='home-card'>
                  <img src={a.image} />
                  <h5>Name : {a.name}</h5>
                  <p><b>MealType: </b> {a.mealType}</p>
                  <p><b>Rating:</b> {a.rating}</p>
                  <button onClick={() => { removeItem(idx) }}>Delete</button>
                </div>
              </>)
            })
          )
        }
      </div>
    </div>
  )
}

export default Card
