import React from "react";
import * as R from "react-router-dom";
import Login from "@presentation/pages/login";
import LayoutDefault from "@presentation/layouts/Default";
import { Validation } from "@presentation/protocols/validation";

import "../scss/main.scss";

const Router: React.FC = () => {
  return (
    <LayoutDefault>
      <R.BrowserRouter>
        <R.Switch>
          <R.Route path="/login" exact component={() => <Login />} />
        </R.Switch>
      </R.BrowserRouter>
    </LayoutDefault>
  );
};

export default Router;
