import { Button } from "@mui/material";
import { Link, navigate } from "raviger";
import logo from "../Images/logo.png";

export default function Header() {
  return (
    <div className="flex bg-[#FF3366] text-[#011627] justify-between p-2 flex-col sm:flex-row gap-2">
      <div className="flex items-center justify-center">
        <Link href="/">
          <img src={logo} alt="logo" width={"80"} />
        </Link>
      </div>
      <p className="flex justify-center items-center text-5xl">
        The Gladden Project
      </p>
      <div className="flex justify-center items-center pr-2">
        <Button
          variant="outlined"
          style={{ backgroundColor: "#2EC4B6", color: "white" }}
          onClick={() => {
            navigate("/chat");
          }}
        >
          Talk
        </Button>
      </div>
    </div>
  );
}
