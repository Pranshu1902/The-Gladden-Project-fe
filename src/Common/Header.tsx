import { Link } from "raviger";
import logo from "../Images/logo.png";

export default function Header() {
  return (
    <div className="flex bg-[#000000] text-[#D22B2B] justify-between p-2">
      <div className="flex items-center">
        <img src={logo} alt="logo" width={"80"} />
      </div>
      <p className="flex justify-center items-center text-5xl">
        The Gladden Project
      </p>
      <div className="flex justify-center items-center">
        <Link
          href="/chat"
          className="bg-red-500 text-black p-2 rounded-lg hover:bg-red-700 font-bold hover:shadow-red-300 hover:shadow-md transition duration-500"
        >
          Consult
        </Link>
      </div>
    </div>
  );
}
