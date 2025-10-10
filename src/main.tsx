import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./AppRouter.tsx";
import AuthProvider from "./Context/AuthContext/AuthProvider.tsx";
import RestaurantsProvider from "./Context/RestaurantsContext/RestaurantsProvider.tsx";
import { SearchProvider } from "./Context/SearchContext/SearchProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <SearchProvider>
        <RestaurantsProvider>
          <AppRouter />
        </RestaurantsProvider>
      </SearchProvider>
    </AuthProvider>
  </StrictMode>
);
