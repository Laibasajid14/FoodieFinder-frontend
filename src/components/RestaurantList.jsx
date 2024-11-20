import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { Link } from "react-router-dom";
import "./RestaurantList.css";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        console.log(response.data.data);
        setRestaurants(response.data.data.results);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      }
    };

    fetchData();
  }, [setRestaurants]);

  return (
    <div className="restaurant-container">
      {restaurants &&
        restaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.restaurantid}`}
            key={restaurant.restaurantid} 
            className="restaurant-row"
          >
            <img
              src={restaurant.image_url}
              alt={restaurant.name}
              className="restaurant-image"
            />
            <div className="restaurant-details">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.city}</p>
              <p>{restaurant.description}</p>
              {/* <p>Cuisine: {restaurant.cuisine}</p> */}
                <p>
                Delivery: {restaurant.delivery_available ? "✔️" : "❌"} | Takeout:{" "}
                {restaurant.takeout_available ? "✔️" : "❌"} | Dine-in:{" "}
                {restaurant.dinein_available ? "✔️" : "❌"}
                </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RestaurantList;
