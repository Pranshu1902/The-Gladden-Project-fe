import { useEffect, useState } from "react";
import LoginRequired from "./Modal/LoginRequired";
import Popup from "./Popup";

export default function Chat() {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setShowLogin(true);
    }
  }, []);
  return (
    <div>
      <div className="text-[#e84242] bg-[#1a1a1d] min-h-screen">
        <div>Chatbot</div>
      </div>
      {/* Login required popup */}
      <Popup open={showLogin} onClose={() => {}}>
        <LoginRequired />
      </Popup>
    </div>
  );
}
