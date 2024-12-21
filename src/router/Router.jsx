import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "artifacts",
        element: <AllArtifacts />,
      },
      {
        path: "add-artifact",
        element: <AddArtifacts />,
      },
      {
        path: "my-artifacts",
        element: <MyArtifacts />,
      },
      {
        path: "liked-artifacts",
        element: <LikedArtifacts />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "artifact/:id",
        element: <ArtifactDetails />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

export default router;
