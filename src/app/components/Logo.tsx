import Image from "next/image";
import Link from "next/link";




const Logo = ({color}:{color :string}) => {
  return (
    <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="K-TREND"
          height={36}
          width={36}
          className= 'w-6 h-6 md:w-9 md:h-9' 
        />
        <p className={ `hidden  md:block tracking-wider text-md font-medium ${color}`}>K-TREND.</p>
      </Link>
  );
}

export default Logo;
