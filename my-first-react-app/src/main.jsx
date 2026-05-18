import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

import "./index.css";

ReactDom.createRoot(document.getElementById("root")).render(
<>
<App/>
<Toaster/>
</>
);

//! With JSX
// const element=<h1>Hello, World</h1>;

// //! Without JSX
// const element=React.createElement("h1",null,"Hello World")

// ReactDom.createRoot(document.getElementById("root")).render(element);