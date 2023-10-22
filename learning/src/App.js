// import ErrorBoundary from './CatchError';
// import ErrorBoundaryTest from './ErrorBoundaryTest';
import ErrorTest from './page/ErrorTest';
import Home from './page/Home';
import PageNotFound from './page/NotFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const page = createBrowserRouter([
  {
    path: "/", element: <Home />
  },
  {
    path: "*", element: <PageNotFound/>
  },
  {
    path: "/triggererror", element: <ErrorTest/>
  }
])


function App() {
  
  return (
    <>
      <RouterProvider router={page} />
    </>
  );
}

export default App;

 


