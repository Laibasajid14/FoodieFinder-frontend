import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import "./RestaurantDetailPage.css"; // Import CSS

const RestaurantDetailPage = () => {
  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/restaurants/${id}`);
        console.log(response.data.data);
        setSelectedRestaurant(response.data.data.result); // Assuming response.data.data is the restaurant object
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, setSelectedRestaurant]);

  if (!selectedRestaurant) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }

  return (
    <div className="restaurant-detail-container">
      <img
        src={selectedRestaurant.image_url}
        alt={selectedRestaurant.name}
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h3>{selectedRestaurant.name}</h3>
        <p><strong>City:</strong> {selectedRestaurant.city}</p>
        <p><strong>Address:</strong> {selectedRestaurant.address}</p>
        <p><strong>Contact:</strong> {selectedRestaurant.contactno || "N/A"}</p>
        <p>{selectedRestaurant.description}</p>
        <p>
          <strong>Services:</strong> 
          Delivery: {selectedRestaurant.delivery_available ? "✔️" : "❌"} | 
          Takeout: {selectedRestaurant.takeout_available ? "✔️" : "❌"} | 
          Dine-in: {selectedRestaurant.dinein_available ? "✔️" : "❌"}
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
