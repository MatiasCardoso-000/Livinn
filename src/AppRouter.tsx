import { Layout } from "./components/Layout/Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import { LoginForm } from "./components";
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/" element={<Layout />}>
          <Route index element={<RestaurantsList />} />
        </Route>
      </Routes>
    </Router>
  );
};
