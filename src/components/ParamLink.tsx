import Link from "next/link";
import { useEffect, useState } from "react";

interface ParamLinkProps {
  name?: string;
  href: string;
  target?: string;
  className?: string;
  children?: React.ReactNode;
}

const ParamLink = ({ name, href, target = "_self", className, children }: ParamLinkProps) => {
    const [searchParams, setSearchParams] = useState('')

    useEffect(() => {
        setSearchParams(window.location.search)
    }, [])

  return (
    <Link href={`${href}${searchParams}`} prefetch={false} legacyBehavior>
      <a
        target={target}
        rel="noopener noreferrer"
        aria-label={name}
        className={className}
      >
        {name ?? children}
      </a>
    </Link>
  );
};

export default ParamLink;
