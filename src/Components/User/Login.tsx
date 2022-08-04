import { useState } from "react";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CircularIntegration from "../../Common/Loader";
import { Button } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="text-[#e84242] bg-[#1a1a1d] min-h-screen">
        <p className="text-7xl font-bold flex justify-center pt-4">Login</p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="pt-6 flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-6">
            <p className="font-bold">Username:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 rounded-lg p-2 shadow"
            />
            <p className="font-bold">Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 rounded-lg p-2 shadow"
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
                style={{ backgroundColor: "#FF0000", color: "#FFFFFF" }}
              >
                Login
              </Button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
