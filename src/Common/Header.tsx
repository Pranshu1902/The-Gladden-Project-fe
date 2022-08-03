import logo from "../Images/logo.png";

export default function Header() {
  return (
    <div className="flex bg-[#000000] text-[#D22B2B] justify-between p-2">
      <div className="flex items-center">
        <img src={logo} alt="logo" width={"20%"} />
      </div>
      <p>The Social Dilemma</p>
      <button>Contact</button>
    </div>
  );
}
