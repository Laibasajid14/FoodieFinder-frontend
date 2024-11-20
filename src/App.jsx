import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantUpdate from './pages/RestaurantUpdate'
// import RestaurantDetail from './pages/RestaurantDetailPage'
import Home from './pages/Home'
import { RestaurantsContextProvider } from './context/RestaurantsContext'
import RestaurantDetailPage from './pages/RestaurantDetailPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RestaurantsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id/update" element={<RestaurantUpdate />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        </Routes>
      </BrowserRouter>
    </RestaurantsContextProvider>
  );
}

export default App
