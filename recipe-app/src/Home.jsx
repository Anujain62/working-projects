import React, { useContext, useState, useCallback } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Context from './Context'
import { useEffect } from "react";
import './App.css'
const Home = () => {
  const { state, dispatch } = useContext(Context)
  const [filterData, setFilterData] = useState("")
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (state.updatedData.length === 0 && filterData !== "") {
      setCountdown(10)

      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)

      const timer = setTimeout(() => {
        dispatch({ type: "UPDATE", payload: state.apiData })
        setFilterData("")
        clearInterval(interval)
      }, 10000)

      return () => {
        clearTimeout(timer)
        clearInterval(interval)
      }
    }
  }, [state.updatedData, filterData, state.apiData, dispatch])

  const AddItem = useCallback((item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }, [dispatch])
  function handleSearch() {
    const q = filterData.trim().toLowerCase()

    if (q === "") {
      dispatch({ type: "UPDATE", payload: state.apiData })
      return
    }
    const filtered = state.apiData.filter((item) => {
      const titleText = (item.title || item.name || "").toLowerCase()

      const mealText = Array.isArray(item.mealType)
        ? item.mealType.join(" ").toLowerCase()
        : (item.mealType || "").toLowerCase()

      return titleText.includes(q) || mealText.includes(q)
    })
    console.log("Filtered:", filtered)
    dispatch({ type: "UPDATE", payload: filtered })
  }
  return (
    <div id='home'>
      <div id='home-navbar'>
        <Link to={'/option'} className='filter'>Filter</Link>

        <div id='left-home'>
          <Link to={"/signup"} className='link'>Signup</Link>
          <Link to={"/home"} className='link'>Home</Link>
          <Link to={"/about"} className='link'>About</Link>
        </div>
        <div id='mid-home'>
          <input
            value={filterData}
            onChange={(e) => setFilterData(e.target.value)}
            placeholder='Search here....'
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div id='right-home'>
          <Link to={"/card"} id='link'>Go to Card &#10148;</Link>
          <p>{state.cart.length}</p>
        </div>
      </div>

      <div id='home-container'>
        {state.apiData.length === 0 ? (
          <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>
        ) : state.updatedData.length === 0 ? (
          <h2 style={{ color: "white", textAlign: "center" }}>
            No results found. Resetting in {countdown} seconds...
          </h2>
        ) : (
          state.updatedData.map((a, index) => (
            <div className='home-card' key={a.id ?? index}>
              <img src={a.image} alt={a.title ?? a.name} />
              <h4>Name : {a.title ?? a.name}</h4>
              <p><b>MealType: </b> {Array.isArray(a.mealType) ? a.mealType[0] : a.mealType}</p>
              <p><b>Rating:</b> {a.rating}</p>
              <button onClick={() => AddItem(a)}>Add</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home
