import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NewMeal from "./pages/NewMeal";
import MealPlan from "./pages/MealPlan";

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
        path: "/meal-plan",
        element: <MealPlan />,
      },
    ],
  },
];

export default routes;
