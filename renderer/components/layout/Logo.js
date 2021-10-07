import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/home">
      <a>
        <img
          className="object-contain h-20 mx-auto my-auto"
          src="/images/logo2.webp"
          alt="logo"
          layout="fill"
        />
      </a>
    </Link>
  );
}
