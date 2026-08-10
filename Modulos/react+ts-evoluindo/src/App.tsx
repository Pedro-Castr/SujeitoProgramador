import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./Global.css";

export default function App() {
  return <RouterProvider router={router} />;
}
