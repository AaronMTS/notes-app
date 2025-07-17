import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

import Home from "./pages/Home";
import AddNoteModal from "./pages/AddNoteModal";

WebFont.load({
  google: {
    families: ["Inter:300,400,500,600,700"],
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/add",
        element: <AddNoteModal />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
