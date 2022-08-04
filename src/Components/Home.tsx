import { useEffect } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import socialMedia from "../Images/socialMedia.png";

export default function Home() {
  useEffect(() => {
    document.title = "The Gladden Project";
  }, []);

  return (
    <div>
      <Header />
      <div className="text-[#e84242] bg-[#1a1a1d] min-h-screen">
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full p-16">
          <div className="md:w-1/2 flex justify-end">
            <img src={socialMedia} width={400} alt="" />
          </div>
          <div className="md:w-1/3 flex justify-start items-center">
            <p className="text-5xl">
              Is the voice inside your head really yours?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
