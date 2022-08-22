import { Button, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { me, updateUser } from "../api/ApiUtils";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Message, SetMeal } from "@mui/icons-material";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  disabledButton: {
    color: "white",
    backgroundColor: "red",
  },
});

export default function Profile() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [previousUserName, setPreviousUserName] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (username.length > 0) {
      try {
        setLoading(true);
        updateUser(username, password, userId).then(() => {
          setLoading(false);
          setMessage("Username updated successfully");
          setTimeout(function () {
            setMessage("");
          }, 2000);
        });
      } catch (error) {
        setError("Username update failed!");
        setTimeout(function () {
          setError("");
        }, 2000);
      }
    }
  };

  useEffect(() => {
    me().then((data) => {
      setUserId(data.id);
      setUsername(data.username);
      setPassword(data.password);
      setMainLoading(false);
      setPreviousUserName(data.username);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="text-[#FF3366] bg-[#011627] min-h-screen p-2">
        <div className="font-bold text-4xl p-4">Profile</div>
        <div>
          {mainLoading ? (
            <div className="flex justify-center items-center w-full h-full">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <p className="text-xl text-[#2EC4B6] font-bold">Username:</p>
                  <TextField
                    variant="outlined"
                    className="bg-white rounded-lg shadow-lg transition duration-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="pt-4">
                  <p className="text-red-500">{error}</p>
                  <p className="text-green-500">{message}</p>
                </div>
                <div className="pt-4">
                  {loading ? (
                    <div className="flex justify-center items-center w-full h-full">
                      <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                      </Box>
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={previousUserName === username}
                      className="p-2 w-full md:w-auto"
                      classes={{ disabled: classes.disabledButton }}
                    >
                      Update
                    </Button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
