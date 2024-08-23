import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import PlantsPage from "../pages/PlantsPage";
import PlantDetailPage from "../pages/PlantDetailPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import FavoriteListPage from "../pages/FavoriteListPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import CustomerInfoPage from "../pages/CustomerInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/favorite-list", element: <FavoriteListPage /> },
      { path: "/shopping-cart", element: <ShoppingCartPage /> },
      { path: "/info", element: <CustomerInfoPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/plants/:slug", element: <PlantDetailPage /> },
      {
        path: "/plants",
        element: <PlantsPage />,
        children: [{ path: "/plants/:slug", element: <PlantDetailPage /> }],
      },
    ],
  },
]);
export default router;
