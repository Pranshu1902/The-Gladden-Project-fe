import { useEffect, useState } from "react";
import { getUsersCount } from "../api/ApiUtils";

export default function UserCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getUsersCount().then((data) => {
      setCount(data.length);
    });
  }, []);

  return (
    <div className="bg-[#011627] text-[#FF3366] min-h-screen flex flex-col gap-12 justify-center items-center">
      <div className="text-xl">Lives changed:</div>
      <div className="text-9xl text-[#2EC4B6]">{count}</div>
    </div>
  );
}
