import LoginRequired from "./Modal/LoginRequired";
import Popup from "./Popup";

export default function Chat() {
  return (
    <div>
      <div className="text-[#e84242] bg-[#1a1a1d] min-h-screen">
        <div>Chatbot</div>
      </div>
      {/* Login required popup */}
      <Popup open={true} onClose={() => {}}>
        <LoginRequired />
      </Popup>
    </div>
  );
}
