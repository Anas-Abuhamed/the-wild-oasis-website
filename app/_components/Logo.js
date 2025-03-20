import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      {/* <Image src={logo} quality={50} alt="The Wild Oasis logo" /> 
       // quality(0 - 100%) for image px, when changed the size of img changed 
       */}
      <Image src={logo} width="60" height="60" quality={100} priority={true} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
