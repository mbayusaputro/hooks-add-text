import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./pages/User";

// Jika ingin menambahkan page baru, disarankan untuk membuat folder baru di dalam folder pages
// const route = [
//   {
//     path: "/input",
//     components: Input
//   }
// ];

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={User} />
    </Switch>
  </BrowserRouter>
);

export default Router;
