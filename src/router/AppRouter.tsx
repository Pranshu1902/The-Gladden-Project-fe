import { useRoutes } from "raviger";
import About from "../Components/About";
import Chat from "../Components/Chat";
import Home from "../Components/Home";
import Login from "../Components/User/Login";
import Signup from "../Components/User/Signup";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/chat": () => <Chat />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}
