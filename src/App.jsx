import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import SecondPage from "./views/SecondPage";
import NotFound from "./views/NotFound";
import "./App.css";
import DefaultPage from "./views/DefaultPage";

const router = createBrowserRouter([
  {
    path: "/navigationinheader/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "first",
        element: <SecondPage />,
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
