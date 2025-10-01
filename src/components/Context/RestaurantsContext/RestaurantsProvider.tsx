import React, { useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import type { Restaurants } from "../../RestaurantCard/RestaurantCard";
import RESTAURANTS from "../../../data/restaurants";

export interface ReservationDetails {
  restaurantName: string;
  date: string;
  time: string;
  people: number;
  reservationId: string;
}

interface RestaurantsProviderProps {
  children: React.ReactNode;
}

export const RestaurantsProvider = ({ children }: RestaurantsProviderProps) => {
  const [restaurants] = useState<Restaurants[]>(RESTAURANTS);
  const [reservations, setReservations] = useState<ReservationDetails[]>([]);

  const handleReservations = (reservation: ReservationDetails) => {
    setReservations([reservation]);
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
