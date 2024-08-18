import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NewMeal from "./pages/NewMeal";
import MealDetails from "./pages/MealDetails";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-meal",
        element: <NewMeal />,
      },
      {
        path: "/meal-details/:id",
        element: <MealDetails />,
      },
    ],
  },
];

export default routes;
