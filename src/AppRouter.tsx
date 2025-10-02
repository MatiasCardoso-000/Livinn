import { Layout } from "./components/Layout/Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import { LoginForm, RegisterForm, RestaurantReservation } from "./components";
import { Contact } from "./pages/Contact/Contact";
import { ReservationConfirmation } from "./components/ReservationConfirmation/ReservationConfirmation";
import UserReservations from "./components/UserReservations/UserReservations";
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="Livinn/login" element={<LoginForm/>}/>
        <Route path="Livinn/register" element={<RegisterForm/>}/>
        <Route path="Livinn/" element={<Layout />}>
          <Route index element={<RestaurantsList />} />
          <Route path="Livinn/contact" element={<Contact />} />
          <Route path="Livinn/reservation/:id" element={<RestaurantReservation />} />
          <Route path="Livinn/my-reservations" element={<UserReservations />} />
          <Route path="Livinn/reservation-confirmation" element={<ReservationConfirmation />} />
        </Route>
      </Routes>
    </Router>
  );
};
