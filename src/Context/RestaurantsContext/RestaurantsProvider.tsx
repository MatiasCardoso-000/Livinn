import React, { useEffect, useState } from "react";
import { RestaurantsContext } from "./RestaurantsContext";
import RESTAURANTS from "../../data/restaurants";
import type { Restaurants } from "../../types/restaurantes.type";
import type { ReservationDetails } from "../../types/reservationDetail.types";

interface RestaurantsProviderProps {
  children: React.ReactNode;
}

export const RestaurantsProvider = ({ children }: RestaurantsProviderProps) => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>(() => {
    const saved = localStorage.getItem("restaurants");
    return saved ? JSON.parse(saved) : RESTAURANTS;
  });
  const [reservations, setReservations] = useState<ReservationDetails[]>(() => {
    const saved = localStorage.getItem("reservation");
    return saved ? JSON.parse(saved) : [];
  });
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const handleReservations = (reservation: ReservationDetails) => {
    const reservationExists = reservations.some((res) => {
      return res.id === reservation.id;
    });

    if (!reservationExists) {
      setReservations((prevState) => [...prevState, reservation]);
    }
  };

  const handleSort = (checked: boolean) => {
    setIsSorted(checked);

    if (checked) {
      const sorted = [...restaurants].sort((a, b) => {
        return a.name.localeCompare(b.name, "es", { sensitivity: "base" });
      });
      setRestaurants(sorted);
    } else {
      setRestaurants(RESTAURANTS);
    }
  };


  useEffect(() => {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }, [restaurants]);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  return (
    <RestaurantsContext.Provider
      value={{
        isSorted,
        handleSort,
        restaurants,
        reservations,
        setReservations,
        handleReservations,
        setIsSorted,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsProvider;
