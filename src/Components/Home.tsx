import { useEffect } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import socialMedia from "../Images/socialMedia.png";
import notification from "../Images/notification.png";

export default function Home() {
  useEffect(() => {
    document.title = "The Gladden Project";
  }, []);

  // https://coolors.co/011627-ff3366-2ec4b6

  return (
    <div>
      <Header />
      <div className="text-[#FF3366] bg-[#011627] min-h-screen">
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full p-16">
          <div className="md:w-1/2">
            <img src={socialMedia} width={400} alt="" />
          </div>
          <div className="md:w-1/3 flex justify-start items-center">
            <p className="text-5xl">
              Is the voice inside your head really yours?
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 justify-center w-full p-16">
          <div className="md:w-1/2 flex justify-end">
            <img src={notification} width={400} alt="" />
          </div>
          <div className="md:w-1/3 flex justify-start items-center text-[#2EC4B6]">
            <p className="text-5xl">
              Are the comments on strangers on the internet controlling you?
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 p-6 mt-12 text-3xl justify-center items-center">
          <div>
            We feel like all these thoughts in our mind are ours but actually it
            is the hidden control of these people on the internet.
          </div>
          <div>
            Watching other people's instagram pictures makes us naturally wonder
            why our life is so messed up whereas in reality, the person that you
            think has teh best life may not really be that happy with his life.
          </div>
          <div>
            These platforms have made algorithms to keep us online and ruin our
            lives while they make money out of it.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
