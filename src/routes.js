import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NewMeal from "./pages/NewMeal";

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
    ],
  },
];

export default routes;
