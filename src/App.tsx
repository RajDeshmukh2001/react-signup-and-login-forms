import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import type { JSX } from "react";

function App(): JSX.Element {
  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  )
}

export default App;
