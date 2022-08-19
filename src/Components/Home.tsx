import { useEffect } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import socialMedia from "../Images/socialMedia.png";
import notification from "../Images/notification.png";
import voice from "../Images/voice.png";
import insta from "../Images/insta.png";
import algo from "../Images/algo.png";
import { Button } from "@mui/material";
import { navigate } from "raviger";

export default function Home() {
  useEffect(() => {
    document.title = "The Gladden Project";
  }, []);

  // https://coolors.co/011627-ff3366-2ec4b6

  return (
    <div>
      <Header />
      <div className="text-[#FF3366] bg-[#011627] min-h-screen text-3xl md:text-5xl">
        <div className="p-8 md:p-16 flex flex-col gap-24 md:gap-36">
          <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
            <div className="md:w-1/2">
              <img src={socialMedia} width={400} alt="" />
            </div>
            <div className="md:w-1/3 flex justify-start items-center">
              <p>Is the voice inside your head really yours?</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 justify-center w-full">
            <div className="md:w-1/2 flex justify-end">
              <img src={notification} width={400} alt="" />
            </div>
            <div className="md:w-1/3 flex justify-start items-center text-[#2EC4B6]">
              <p>
                Are the comments of strangers on the internet bothering you?
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
            <div className="md:w-1/2">
              <img src={voice} width={400} alt="" />
            </div>
            <div className="md:w-1/3 flex justify-start items-center">
              <p>
                Or is it the hidden control of these people on the internet?
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 justify-center w-full">
            <div className="md:w-1/2 flex justify-end">
              <img src={insta} width={400} alt="" />
            </div>
            <div className="md:w-1/3 flex justify-start items-center text-[#2EC4B6]">
              <p className="">
                Does instagram makes you wonder why your life is so messed up
                compared to others?
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
            <div className="md:w-1/2">
              <img src={algo} width={400} alt="" />
            </div>
            <div className="md:w-1/3 flex justify-start items-center">
              <p>
                These platforms use algorithms to keep us online longer while
                they make money.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-12 text-3xl justify-center items-center">
            <div>Want personalized help to get out of this rat hole?</div>
            <div className="w-full md:w-auto">
              <Button
                variant="outlined"
                fullWidth
                style={{ backgroundColor: "#2EC4B6", color: "white" }}
                onClick={() => {
                  navigate("/chat");
                }}
              >
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
