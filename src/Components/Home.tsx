import { useEffect } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Home() {
  useEffect(() => {
    document.title = "The Gladden Project";
  }, []);

  return (
    <div>
      <Header />
      <div className="text-red-500 bg-[#1f262b] min-h-screen">
        <p>Home</p>
      </div>
      <Footer />
    </div>
  );
}
