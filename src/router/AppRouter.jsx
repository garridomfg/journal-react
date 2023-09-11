import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

const router = createBrowserRouter([
  {
    path: '',
    children: [AuthRoutes, JournalRoutes],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
