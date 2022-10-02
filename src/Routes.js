import Home from './pages/Home';
import Login from './pages/Login';
import Error404 from './components/Error404';

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error404 />
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
