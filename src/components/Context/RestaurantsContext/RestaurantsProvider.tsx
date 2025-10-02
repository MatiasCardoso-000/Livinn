import React, { useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import RESTAURANTS from "../../../data/restaurants";
import type { Restaurants } from "../../../types/restaurantes.type";
import type { ReservationDetails } from "../../../types/reservationDetail.types";
interface RestaurantsProviderProps {
  children: React.ReactNode;
}

export const RestaurantsProvider = ({ children }: RestaurantsProviderProps) => {
  const [restaurants] = useState<Restaurants[]>(RESTAURANTS);
  const [reservations, setReservations] = useState<ReservationDetails[]>([]);

  const handleReservations = (reservation: ReservationDetails) => {
    setReservations((prevReservations) => [...prevReservations, reservation]);
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
