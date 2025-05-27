import useQueryParams from "@/hooks/useQueryParam";
import Link from "next/link";

interface ParamLinkProps {
  name?: string;
  link: string;
  target?: string;
  className?: string;
  children?: React.ReactNode;
}

const ParamLink = ({ name, link, target = "_self", className, children }: ParamLinkProps) => {
  const params = useQueryParams();

  const isExternal = /^https?:\/\//.test(link);
  const searchString = new URLSearchParams(params).toString()
const href = searchString ? `${link}?${searchString}` : link

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        aria-label={name}
        className={className}
      >
        {name ?? children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} legacyBehavior>
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
