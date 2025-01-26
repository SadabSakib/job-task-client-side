import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import NotFound from "./components/NotFound.jsx";
// import Main from "./components/Main.jsx";
import Home from "./components/Home.jsx";
import PrivateRoute from "./components/Visa/PrivateRoute.jsx";
import AllVisas from "./components/Visa/AllVisas.jsx";
import Main from "./components/Visa/Main.jsx";
import AddVisa from "./components/Visa/AddVisa.jsx";
import MyAddedVisas from "./components/Visa/MyAddedVisas.jsx";
import MyVisaApplications from "./components/Visa/MyVisaApplications.jsx";
import VisaDetails from "./components/Visa/VisaDetails/VisaDetails.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import "bootstrap/dist/css/bootstrap.min.css";
import Users2 from "./components/Users2.jsx";
import AllArtifacts from "./pages/AllArtifacts.jsx";
import AddArtifact from "./pages/AddArtifact.jsx";
import MyArtifacts from "./pages/MyArtifacts.jsx";
import LikedArtifacts from "./pages/LikedArtifacts.jsx";
import ArtifactDetails from "./pages/ArtifactDetails.jsx";
import UpdateArtifact from "./pages/UpdateArtifact.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/all-visas",
//         element: <AllVisas />,
//         loader: () => fetch("https://assignment-11-server-side-omega-beige.vercel.app/visas"),
//       },
//       {
//         path: "/add-visa",
//         element: (
//           <PrivateRoute>
//             <AddVisa />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/my-added-visas",
//         element: (
//           <PrivateRoute>
//             <MyAddedVisas />
//           </PrivateRoute>
//         ),
//         // loader: ({params}) => fetch("https://assignment-11-server-side-omega-beige.vercel.app/coffee"),
//       },
//       {
//         path: "/my-visa-applications",
//         element: (
//           <PrivateRoute>
//             <MyVisaApplications />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/visa/:id",
//         element: (
//           <PrivateRoute>
//             <VisaDetails />
//           </PrivateRoute>
//         ),
//         loader: ({ params }) =>
//           fetch(`https://assignment-11-server-side-omega-beige.vercel.app/visa/${params.id}`),
//       },
//       {
//         path: "/login",
//         element: <SignIn />,
//       },
//       {
//         path: "/register",
//         element: <SignUp />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//         {
//           path: "/users2",
//           element: <Users2></Users2>,
//           loader: () => fetch("/https://assignment-11-server-side-omega-beige.vercel.app/users"),
//         },
//     ],
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-artifacts",
        element: <AllArtifacts />,
        loader: () =>
          fetch(
            "https://assignment-11-server-side-omega-beige.vercel.app/artifacts"
          ),
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoute>
            {" "}
            <AddArtifact />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            {" "}
            <MyArtifacts />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            {" "}
            <LikedArtifacts />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/artifact/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ArtifactDetails />{" "}
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://assignment-11-server-side-omega-beige.vercel.app/artifact/${params.id}`),
      },
      {
        path: "/update-artifact/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateArtifact />{" "}
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://assignment-11-server-side-omega-beige.vercel.app/artifact/${params.id}`),
      },
      { path: "/login", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
