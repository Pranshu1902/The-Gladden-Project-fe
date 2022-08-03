import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function About() {
  return (
    <div>
      <Header />
      <div className="text-red-500 bg-[#1f262b] min-h-screen">
        <div className="p-4">
          <p className="text-7xl">About Us</p>
          <div className="flex gap-6 justify-center flex-col md:flex-row p-4 mt-6">
            <div className="flex justify-center items-center">
              <img
                src="https://avatars.githubusercontent.com/u/70687348?v=4"
                alt=""
                className="rounded-full"
                width={"200"}
              />
            </div>
            <div className="text-[#66fcf1]">
              <p className="text-5xl font-bold">Pranshu Aggarwal</p>
              <div className="flex gap-4 text-3xl pt-2">
                <a
                  href="https://github.com/Pranshu1902/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github hover:animate-pulse hover:scale-110 transition duration-300"></i>
                </a>
                <a
                  href="https://twitter.com/pranshu1902"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter hover:animate-pulse hover:scale-110 transition duration-300"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pranshu-aggarwal-4aa8181b4/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin hover:animate-pulse hover:scale-110 transition duration-300"></i>
                </a>
              </div>
              <p className="text-xl">
                Pranshu is a tech enthusiast and a self-taught programmer. He is
                a full stack developer with a passion for learning and building
                things to make the lives of people better. He also love to read
                books. Feel free to connect!{" "}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-5xl font-bold">Mission:</p>
            <p className="text-xl">
              Our mission is to elevate the standard of a human mind and make it
              a better place to be at. We understand that not a lot of people
              are comfortable in sharing their personal life with stranger over
              the phone, that's why we created this amazing chatbot which offers
              you the same experience without having you to worry about your
              confidentiality. Get personalized help and learn more about some
              common causes of anxiety among humans all for free. Try it out
              today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
