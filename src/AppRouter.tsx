import { Layout } from "./components/Layout/Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import { LoginForm, RegisterForm } from "./components";
import { Contact } from "./pages/Contact/Contact";
import { ReservationConfirmation } from "./components/ReservationConfirmation/ReservationConfirmation";
import { RestaurantReservation } from "./components/RestaurantReservation/RestaurantReservation";
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/" element={<Layout />}>
          <Route index element={<RestaurantsList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation/:id" element={<RestaurantReservation />} />
          <Route path="/reservation-confirmation" element={<ReservationConfirmation />} />
        </Route>
      </Routes>
    </Router>
  );
};
