import { useRoutes } from "raviger";
import Home from "../Components/Home";

const routes = {
  "/": () => <Home />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}
