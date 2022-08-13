import { useEffect, useState } from "react";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { login } from "../../api/ApiUtils";
import { Link, navigate } from "raviger";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/chat");
    }

    document.title = "Login | The Gladden Project";
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setError("");
    e.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError("Please fill all the fields");
      setLoading(false);
    } else {
      const data = await login(username, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setLoading(false);
        navigate(`/chat`);
      } else {
        setError("Invalid login credentials");
        setLoading(false);
        setPassword("");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="text-[#FF3366] bg-[#011627] min-h-screen">
        <p className="text-7xl font-bold flex justify-center pt-4 text-[#2EC4B6]">
          Login
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="pt-12 flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-6">
            <p className="font-bold">Username:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 rounded-lg p-2 shadow text-black"
            />
            <p className="font-bold">Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 rounded-lg p-2 shadow text-black"
            />
          </div>
          {error.length > 0 && (
            <div className="flex justify-center items-center p-2">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
          <div className="pt-6">
            {loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                variant="contained"
                className="cursor-pointer"
                fullWidth
                type="submit"
                style={{ backgroundColor: "#2EC4B6", color: "#FFFFFF" }}
              >
                Login
              </Button>
            )}
          </div>
        </form>
        <p className="flex justify-center items-center">
          New user? &nbsp;
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Signup
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
