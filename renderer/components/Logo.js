import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="relative h-20">
      <Link href="/home">
        <a>
          <Image
            src="/images/logo2.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>
    </div>
  );
}
