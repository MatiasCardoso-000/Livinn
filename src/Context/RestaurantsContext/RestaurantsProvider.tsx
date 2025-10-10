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
    const saved = localStorage.getItem("restaurnts");
    return saved ? JSON.parse(saved) : RESTAURANTS;
  });
  const [reservations, setReservations] = useState<ReservationDetails[]>(() => {
    const saved = localStorage.getItem("reservation");
    return saved ? JSON.parse(saved) : [];
  });

  const handleReservations = (reservation: ReservationDetails) => {
    const reservationExists = reservations.some((res) => {
      return res.id === reservation.id;
    });

    if (!reservationExists) {
      setReservations((prevState) => [...prevState, reservation]);
    }
  };

  useEffect(() => {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }, [restaurants]);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  // const newResto = [...restaurants];
  // const restaurantReserved = newResto.findIndex((res) => {
  //   reservations.map((r) => r.id === res.id);
  // });

  // if (restaurantReserved !== -1) {
  //   newResto[restaurantReserved].capacity -=
  //     reservations[restaurantReserved].people;
  //   if (newResto[restaurantReserved].capacity === 0) {
  //     newResto[restaurantReserved].availability = false;
  //     setRestaurants([...newResto]);
  //     localStorage.setItem("restaurants", JSON.stringify(newResto));
  //   }
  // }
  // localStorage.setItem("restaurants", JSON.stringify(newResto));

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        reservations,
        setReservations,
        handleReservations,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsProvider;
