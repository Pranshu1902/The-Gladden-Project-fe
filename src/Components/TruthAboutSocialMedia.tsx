import Footer from "../Common/Footer";
import Header from "../Common/Header";
import instagram from "../Images/instagram.png";

export default function TruthAboutSocialMedia() {
  return (
    <div>
      <Header />
      <div className="text-[#FF3366] bg-[#011627] min-h-screen p-2">
        <div className="text-6xl mb-6 m-4">The Truth about Social Media</div>
        <div className="flex gap-4 justify-center items-center p-16">
          <img src={instagram} alt="" width={"10%"} />
          <p className="text-[#2EC4B6] text-2xl">
            How frequently do you use social media apps like instagram? Do you
            feel like you are stuck in an endless loop without any control on
            your scrolling? Do you feel better after you stop scrolling or
            before?
          </p>
        </div>
        <div>
          <p className="text-3xl">
            The platforms use advanced computer science algorithms to predict
            their users next move and use it to make money while they
            manipuilate our lives.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
