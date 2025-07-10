import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import Modal from "./components/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/add",
        element: (
          <Modal>
            <AddNote />
          </Modal>
        ),
      },
    ],
  },
]);

function App() {
  WebFont.load({
    google: {
      families: ["Inter"],
    },
  });

  return <RouterProvider router={router} />;
}

export default App;
