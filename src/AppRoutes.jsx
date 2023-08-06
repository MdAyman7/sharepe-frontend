import { ConfigProvider } from "antd";

import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateContract from "./pages/Contract";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/home",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/create",
      element: (
        <Layout>
          <CreateContract />
        </Layout>
      ),
    },

    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/signup",
      element: (
        <Layout>
          <Signup />
        </Layout>
      ),
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
