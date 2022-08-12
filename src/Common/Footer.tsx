import { Link } from "raviger";

export default function Footer() {
  return (
    <div className="bg-[#FF3366] text-[#011627]">
      <div className="p-2">
        <div className="flex">
          <p className="text-3xl w-full">The Gladden Project</p>
          <div className="w-full flex justify-end gap-2 text-2xl">
            <a
              href="https://twitter.com/ProjectGladden"
              className="hover:scale-110"
            >
              <i className="fa-brands fa-twitter hover:text-[#2EC4B6] transition duration-300"></i>
            </a>
            <a
              href="mailto:thegladdenproject@gmail.com"
              className="hover:scale-110"
            >
              <i className="fa fa-envelope hover:text-[#2EC4B6] transition duration-300"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center hover:font-bold hover:underline">
          <Link href="/about">About us</Link>
        </div>
      </div>
    </div>
  );
}
