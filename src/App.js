import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Root from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true , element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'product/:id', element: <ProductDetails /> }
    ],
    errorElement: <ErrorPage />
  }
]
);
function App() {

  return <RouterProvider router={router} />;
}

export default App;
