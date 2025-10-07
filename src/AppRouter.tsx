import { Layout } from "./components/Layout/Layout";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import { LoginForm, RegisterForm, RestaurantReservation } from "./components";
import { Contact } from "./pages/Contact/Contact";
import { ReservationConfirmation } from "./components/ReservationConfirmation/ReservationConfirmation";
import UserReservations from "./components/UserReservations/UserReservations";

export const AppRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<RestaurantsList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation/:id" element={<RestaurantReservation />} />
          <Route path="/my-reservations" element={<UserReservations />} />
          <Route path="/reservation-confirmation" element={<ReservationConfirmation />} />
        </Route>
      </Routes>
    </Router>
  );
};
