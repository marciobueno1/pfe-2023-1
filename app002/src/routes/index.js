import { About, App, Home } from "../pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "pessoas",
    element: <App />,
  },
];
