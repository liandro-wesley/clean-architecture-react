import LayoutDefault from "@presentation/layouts/Default";
import Login from "@presentation/pages/login";
import React from "react";

const App: React.FC = () => {
  return (
    <LayoutDefault>
      <Login />
    </LayoutDefault>
  );
};

export default App;
