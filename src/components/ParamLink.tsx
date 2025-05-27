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

  return (
    <Link href={`${link}?${params}`} prefetch={false} legacyBehavior>
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
