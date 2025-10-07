import React, { useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import RESTAURANTS from "../../../data/restaurants";
import type { Restaurants } from "../../../types/restaurantes.type";
import type { ReservationDetails } from "../../../types/reservationDetail.types";
interface RestaurantsProviderProps {
  children: React.ReactNode;
}

export const RestaurantsProvider = ({ children }: RestaurantsProviderProps) => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>(RESTAURANTS);
  const [reservations, setReservations] = useState<ReservationDetails[]>([]);

  

  const handleReservations = (reservation: ReservationDetails) => {
    setReservations((prevReservations) => [...prevReservations, reservation]);

    const restaurantReserved = restaurants.findIndex((res) => {
      return res.id === reservation.id;
    });


    const copiedRestaurants = structuredClone(restaurants)

    if (restaurantReserved != -1) {
      copiedRestaurants[restaurantReserved].capacity -= reservation.people;
      setRestaurants([...copiedRestaurants])
    }

  };

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, reservations, setReservations, handleReservations }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsProvider;
