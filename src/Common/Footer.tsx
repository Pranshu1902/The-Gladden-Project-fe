import { Link } from "raviger";

export default function Footer() {
  return (
    <div className="bg-[#FF3366] text-[#011627]">
      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-3xl w-full flex items-center">
            The Gladden Project
          </p>
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="flex justify-center items-center hover:font-bold hover:underline">
              <Link href="/chat">Talk</Link>
            </div>
            <div className=" hover:font-bold hover:underline">
              <Link href="/about">About us</Link>
            </div>
            <div className=" hover:font-bold hover:underline">
              <Link href="/profile">Profile</Link>
            </div>
          </div>
          <div className="w-full flex justify-end gap-2 text-2xl">
            <a
              href="https://twitter.com/ProjectGladden"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110"
            >
              <i className="fa-brands fa-twitter hover:text-[#2EC4B6] transition duration-300"></i>
            </a>
            <a
              href="mailto:thegladdenproject@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110"
            >
              <i className="fa fa-envelope hover:text-[#2EC4B6] transition duration-300"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        Made with &nbsp;<i className="fa fa-heart text-red-200"></i>&nbsp;
        by&nbsp;
        <a
          href="https://pranshu1902.netlify.app"
          target={"_blank"}
          rel={"noreferrer"}
          className="hover:text-[#66fcf1] hover:font-bold transition duration-300 underline"
        >
          Pranshu
        </a>
      </div>
    </div>
  );
}
