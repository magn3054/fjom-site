import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import OmOs from "./views/OmOs";
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
