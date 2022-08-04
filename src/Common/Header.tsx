import { Button } from "@mui/material";
import { Link, navigate } from "raviger";
import logo from "../Images/logo.png";

export default function Header() {
  return (
    <div className="flex bg-[#000000] text-[#D22B2B] justify-between p-2">
      <div className="flex items-center">
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
          style={{ backgroundColor: "red", color: "white" }}
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
