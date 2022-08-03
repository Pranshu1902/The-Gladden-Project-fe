import { useRoutes } from "raviger";
import About from "../Components/About";
import Home from "../Components/Home";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}
