import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import PlantsPage from "../pages/PlantsPage";
import PlantDetailPage from "../pages/PlantDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
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
