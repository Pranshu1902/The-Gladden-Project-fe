import { Link } from "raviger";

export default function Footer() {
  return (
    <div className="bg-black p-2 text-red-500">
      <div className="flex">
        <p className="text-3xl w-full">The Gladden Project</p>
        <div className="w-full flex justify-end gap-2 text-2xl">
          <a href="https://twitter.com/ProjectGladden">
            <i className="fa-brands fa-twitter hover:text-red-700"></i>
          </a>
          <a href="mailto:thegladdenproject@gmail.com">
            <i className="fa fa-envelope hover:text-red-700"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/about">About us</Link>
      </div>
    </div>
  );
}
