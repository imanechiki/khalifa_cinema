import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Khalifa Group Logo"
        width={120}
        height={40}
        quality={100}
        priority
        className="object-contain"
      />
    </Link>
  );
}
