import Footer from "../Common/Footer";
import Header from "../Common/Header";
import instagram from "../Images/instagram.png";
import facebook from "../Images/fb.png";
import ads from "../Images/ads.png";

export default function TruthAboutSocialMedia() {
  return (
    <div>
      <Header />
      <div className="text-[#FF3366] bg-[#011627] min-h-screen p-2">
        <div className="text-6xl mb-6 m-4">The Truth about Social Media</div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-4 md:p-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={instagram} alt="" width={"20%"} />
          </div>
          <p className="w-full md:w-1/2 text-[#2EC4B6] text-2xl flex justify-center">
            How frequently do you use social media apps like instagram? Do you
            feel like you are stuck in an endless loop without any control on
            your scrolling? Do you feel better after you stop scrolling or
            before?
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-4 md:p-16">
          <p className="w-full md:w-1/2 text-2xl flex justify-center">
            These platforms use your attention to sell ads and make billions!
            The more we scroll, the more ad content comes in our feed and more
            the advertisers pay for it.
          </p>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={facebook} alt="" width={"20%"} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-4 md:p-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={ads} alt="" width={"50%"} />
          </div>
          <p className="w-full md:w-1/2 text-[#2EC4B6] text-2xl flex justify-center">
            Why do avertisers pay for these ads? If you are not paying for a
            product, then you are the product! The product here is your
            attention that is being bought by these advertisers using platforms
            like instagram.
          </p>
        </div>

        <div className="flex justify-center p-6">
          <div className="flex justify-center text-2xl bg-[#190662] p-2 rounded-lg shadow w-full md:w-1/2">
            <p className="text-[#]">
              If you are not paying for the product then you are the product.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
