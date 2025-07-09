import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

import Home from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

function App() {
  WebFont.load({
    google: {
      families: ["Inter"],
    },
  });

  return <RouterProvider router={router} />;
}

export default App;
