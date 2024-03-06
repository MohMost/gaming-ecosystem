import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex justify-between items-center font-medium px-32 py-8  absolute w-full top-0 shadow-inner">
      <div>
        <Link href="/">
          <Image src="/vector.svg" width={35} height={35} alt="" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-6 text-white">
          <li className="hover:text-[color:hsl(var(--primary))] text-lg">
            <Link href="/">Concept</Link>
          </li>
          <li className="hover:text-[color:hsl(var(--primary))] text-lg">
            <Link href="/about">Bucketlist</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/">
          <Image src="/userCircle.svg" width={35} height={35} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
