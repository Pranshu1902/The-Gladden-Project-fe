import { useRoutes } from "raviger";
import About from "../Components/About";
import Chat from "../Components/Chat";
import Home from "../Components/Home";
import Profile from "../Components/Profile";
import TruthAboutSocialMedia from "../Components/TruthAboutSocialMedia";
import Login from "../Components/User/Login";
import Signup from "../Components/User/Signup";
import UserCount from "../Components/UserCount";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/chat": () => <Chat />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/profile": () => <Profile />,
  "/social-media": () => <TruthAboutSocialMedia />,
  "/count": () => <UserCount />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}
