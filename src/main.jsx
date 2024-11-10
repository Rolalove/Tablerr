import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/DashboardPage";
import Home from "./pages/HomePage";
import Root from "./layouts/Root";
import DashboardLayout from "./layouts/DashboardLayout";
import Layout from "./pages/auth/Layout";
import Login from "./pages/auth/login";
import { Provider } from "react-redux";
import NotFoundPage from "./pages/NotFoundPage";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFoundPage />}>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>

      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          index
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
