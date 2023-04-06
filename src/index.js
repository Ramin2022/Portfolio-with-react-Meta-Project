import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ChakraProvider } from "@chakra-ui/react";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
