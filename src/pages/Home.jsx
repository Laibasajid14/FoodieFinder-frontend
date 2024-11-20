import React from 'react'
import Header from '../components/Header'
import FilterSidebar from '../components/FilterSidebar'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
  return (
    <div>
      <Header/>
      <FilterSidebar/>
      <RestaurantList/>
    </div>
  )
}

export default Home
