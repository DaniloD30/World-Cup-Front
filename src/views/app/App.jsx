import React, { Suspense } from "react";
import Routers from "../../components/app/routers/Routers";
import "./App.scss";

const App = () => {
  return (
    <>
      <Suspense fallback="loading">
        <div style={{ backgroundColor: "#9E9E9E", height: "100%" }}>
          <Routers.Anonymous />
        </div>
      </Suspense>
    </>
  );
};

export default App;
