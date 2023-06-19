import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { HabitContextProvider } from "./hook/HabitContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HabitContextProvider>
      <App />
    </HabitContextProvider>
  </StrictMode>
);
