import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import OmOs from "./views/OmOs";
import WhatWeDo from "./views/WhatWeDo";
import Kontakt from "./views/Kontakt";
import NotFound from "./views/NotFound";
import "./App.css";
import DefaultPage from "./views/DefaultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "/omos",
        element: <OmOs />,
      },
      {
        path: "/whatwedo",
        element: <WhatWeDo />,
      },
      {
        path: "/kontakt",
        element: <Kontakt />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
