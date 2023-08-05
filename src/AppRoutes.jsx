import { ConfigProvider } from "antd";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateContract from "./pages/Contract";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <CreateContract />,
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00A685",
          borderRadius: 8,
        },
      }}
    >
      <div className="bg-gray-800 min-h-screen">
        <div className="container max-w-screen-sm mx-auto min-h-screen bg-gray-100">
          <RouterProvider router={router} />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
