import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Image 
      src="/StockifyPOS_Logo.png"
      alt="Stockify POS"
      width={150}
      height={40}
      className={`h-10 w-auto ${className}`}
      priority
    />
  );
};

export default Logo;
