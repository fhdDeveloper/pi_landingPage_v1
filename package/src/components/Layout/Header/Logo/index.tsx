import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/dark_logo_pi.png"
        alt="logo"
        width={50}
        height={50}
        quality={100}
        className="dark:hidden"
      />

      <Image
        src="/images/logo/white_logo_pi.png"
        alt="logo"
        width={50}
        height={50}
        quality={100}
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
